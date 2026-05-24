import urllib.request
import urllib.parse
import json
import re
import time
import os

# Mapping of creature ID to Wikipedia article title
WIKI_PAGES = {
    "atlantic-salmon": "Salmo_salar",
    "striped-bass": "Striped_bass",
    "clownfish": "Amphiprioninae",
    "polar-bear": "Polar_bear",
    "manatee": "Manatee",
    "killer-whale": "Orca",
    "green-sea-turtle": "Green_sea_turtle",
    "whale-shark": "Whale_shark",
    "wolf-eel": "Wolf_eel",
    "chain-catshark": "Chain_catshark",
    "ahmed-gabr-record": "Scuba_diving",
    "great-white-shark": "Great_white_shark",
    "emperor-penguin": "Emperor_penguin",
    "giant-oarfish": "Giant_oarfish",
    "coelacanth": "Coelacanth",
    "japanese-spider-crab": "Japanese_spider_crab",
    "megamouth-shark": "Megamouth_shark",
    "orange-roughy": "Orange_roughy",
    "anglerfish": "Anglerfish",
    "goblin-shark": "Goblin_shark",
    "blobfish": "Psychrolutes_marcidus",
    "vampire-squid": "Vampire_squid",
    "telescope-octopus": "Amphitretus_pelagicus",
    "gulper-eel": "Gulper_eel",
    "southern-elephant-seal": "Southern_elephant_seal",
    "black-swallower": "Black_swallower",
    "sperm-whale": "Sperm_whale",
    "giant-isopod": "Giant_isopod",
    "barreleye-fish": "Barreleye",
    "titanic-wreck": "Titanic",
    "dumbo-octopus": "Grimpoteuthis",
    "sea-angel": "Sea_angel",
    "abyssal-grenadier": "Rattail_(fish)",
    "giant-squid": "Giant_squid",
    "sea-cucumber": "Sea_cucumber",
    "deep-sea-brittle-star": "Ophiuroidea",
    "uss-johnston-wreck": "USS_Johnston_(DD-557)",
    "hadal-amphipod": "Hirondellea_gigas",
    "mariana-snailfish": "Pseudoliparis_swirei",
    "giant-tube-worms": "Riftia_pachyptila",
    "trieste-descent": "Trieste_(bathyscaphe)",
    "mariana-trench-bottom": "Challenger_Deep"
}

# Fallback images in case Wikipedia API doesn't return enough quality results
FALLBACK_IMAGES = {
    "blobfish": [
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Psychrolutes_marcidus.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/e/ec/Blobfish_model.jpg"
    ],
    "barreleye-fish": [
        "https://upload.wikimedia.org/wikipedia/commons/8/82/Macropinna_microstoma.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/Barreleye_NOAA.jpg"
    ]
}

def fetch_wiki_images(title):
    print(f"Fetching images for: {title}...")
    url = f"https://en.wikipedia.org/api/rest_v1/page/media-list/{urllib.parse.quote(title)}"
    req = urllib.request.Request(
        url,
        headers={'User-Agent': 'DeepSeaCloneProject/1.0 (contact: info@example.com) Python-urllib'}
    )
    
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode('utf-8'))
            items = data.get('items', [])
            
            image_urls = []
            for item in items:
                # We only want images
                if item.get('type') != 'image':
                    continue
                
                srcset = item.get('srcset', [])
                if not srcset:
                    continue
                
                # Get the largest resolution image source (the last entry in srcset list)
                src = srcset[-1].get('src')
                if not src:
                    continue
                
                if src.startswith('//'):
                    src = 'https:' + src
                elif src.startswith('/'):
                    src = 'https://en.wikipedia.org' + src
                
                # Filter out SVGs, icons, maps, range charts, and audio/video files
                filename = src.split('/')[-1].lower()
                if any(ext in filename for ext in ['.svg', '.webm', '.ogg', '.ogv', '.mp3', '.gif']):
                    continue
                if any(keyword in filename for keyword in ['map', 'range', 'distribution', 'cladogram', 'phylogeny', 'icon', 'logo', 'location', 'diagram']):
                    continue
                
                # Check for quality Wikimedia Commons image source
                image_urls.append(src)
                if len(image_urls) >= 3: # We need max 3 images
                    break
                    
            return image_urls
    except Exception as e:
        print(f"Error fetching {title}: {e}")
        return []

def main():
    creatures_file = r"c:\Users\Squex\Downloads\merak\src\data\creatures.ts"
    
    if not os.path.exists(creatures_file):
        print(f"Error: creatures.ts not found at {creatures_file}")
        return
        
    with open(creatures_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for cid, title in WIKI_PAGES.items():
        images = fetch_wiki_images(title)
        
        # Use fallbacks if necessary or if we got empty list
        if (not images or len(images) < 2) and cid in FALLBACK_IMAGES:
            images = FALLBACK_IMAGES[cid] + images
            images = list(dict.fromkeys(images))[:3] # remove duplicates
            
        # If we still got nothing, use some general fallback
        if not images:
            print(f"Warning: No images found for {cid}, keeping existing.")
            continue
            
        print(f"-> Found {len(images)} images for {cid}: {images}")
        
        # Now, replace the images array in the TypeScript file content
        pattern = re.compile(
            rf'(id:\s*"{cid}",.*?\n\s*images:\s*\[).*?(\],)',
            re.DOTALL
        )
        
        # Format the new images array as a TS string
        formatted_images = "\n      " + ",\n      ".join(f'"{img}"' for img in images) + "\n    "
        replacement = rf'\1{formatted_images}\2'
        
        content, count = pattern.subn(replacement, content)
        if count == 0:
            # Try single quote pattern just in case
            pattern_sq = re.compile(
                rf"(id:\s*'{cid}',.*?\n\s*images:\s*\[).*?(\],)",
                re.DOTALL
            )
            content, count = pattern_sq.subn(replacement, content)
            
        print(f"Updated {cid} in TS file: {count > 0}")
        time.sleep(0.3) # rate-limiting sleep
        
    with open(creatures_file, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Done! creatures.ts updated successfully with actual real images.")

if __name__ == "__main__":
    main()
