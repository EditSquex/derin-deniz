export interface Creature {
  id: string;
  name: string;
  nameTr: string;
  depth: number;
  description: string;
  funFact: string;
  images: string[];
  category: 'epipelagic' | 'mesopelagic' | 'bathypelagic' | 'abyssopelagic' | 'hadalpelagic' | 'landmark' | 'wreck';
}

export const creatures: Creature[] = [
  {
    id: "atlantic-salmon",
    name: "Atlantic Salmon",
    nameTr: "Atlantik Somonu",
    depth: 15,
    description: "Atlantik somonları, hayatlarının büyük bir kısmını tuzlu denizlerde geçirip yumurtlamak için tatlı sulara göç eden muhteşem balıklardır. Güçlü kas yapıları sayesinde akıntıya karşı yüzebilir ve engellerin üzerinden sıçrayabilirler.",
    funFact: "Yumurtlama döneminde doğdukları nehirleri bulmak için koku duyularını ve Dünya'nın manyetik alanını kullanırlar.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Wst_atlantischer_lachs_stoer_001.jpg/500px-Wst_atlantischer_lachs_stoer_001.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/1280px-Salmo_salar.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Atlantic_Salmon%2C_Nord-du-Qu%C3%A9bec%2C_CA-QC%2C_CA_imported_from_iNaturalist_photo_404770265.jpg/1280px-Atlantic_Salmon%2C_Nord-du-Qu%C3%A9bec%2C_CA-QC%2C_CA_imported_from_iNaturalist_photo_404770265.jpg"
    ],
    category: "epipelagic"
  },
  {
    id: "striped-bass",
    name: "Striped Bass",
    nameTr: "Çizgili Levrek",
    depth: 25,
    description: "Kuzey Amerika kıyılarında yaygın olarak bulunan, vücudunun yan tarafındaki belirgin yatay çizgilerle tanınan yırtıcı bir balık türüdür. Hem tuzlu hem de acı sularda rahatlıkla yaşayabilirler.",
    funFact: "Çok obur avcılardır; küçük balıklar, yengeçler ve mürekkep balıklarıyla beslenirler.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Morone_saxatilis_SI2.jpg/500px-Morone_saxatilis_SI2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Researcher_with_striped_bass.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Striped_bass_%28Morone_saxatilis%29.png/500px-Striped_bass_%28Morone_saxatilis%29.png"
    ],
    category: "epipelagic"
  },
  {
    id: "clownfish",
    name: "Clownfish",
    nameTr: "Palyaço Balığı",
    depth: 30,
    description: "Deniz şakayıkları (anemon) ile ortakyaşam (sembyotik) ilişkisi kuran, canlı turuncu renkleri ve beyaz çizgileriyle bilinen sevimli mercan balıklarıdır. Anemonun zehirli dokunaçları onları yırtıcılardan korur.",
    funFact: "Tüm palyaço balıkları erkek olarak doğar. Gruptaki baskın dişi öldüğünde, en büyük erkek cinsiyet değiştirerek dişi olur.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg/1280px-Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Spinecheek_anemonefish_%28Premnas_biaculeatus%29_%2825377306267%29.jpg/1280px-Spinecheek_anemonefish_%28Premnas_biaculeatus%29_%2825377306267%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Amphiprion_ocellaris_%28Clown_anemonefish%29_Nemo.jpg/960px-Amphiprion_ocellaris_%28Clown_anemonefish%29_Nemo.jpg"
    ],
    category: "epipelagic"
  },
  {
    id: "polar-bear",
    name: "Polar Bear",
    nameTr: "Kutup Ayısı",
    depth: 40,
    description: "Kutup ayıları karada yaşasalar da bilimsel olarak deniz memelisi kabul edilirler. Avlanırken veya buz kütleleri arasında geçiş yaparken su altında 40-50 metre derinliğe kadar dalış yapabilirler.",
    funFact: "Kutup ayılarının postu beyaz değil şeffaftır ve altındaki derileri tamamen siyahtır, bu sayede güneş ısısını emerler.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/500px-Polar_Bear_-_Alaska_%28cropped%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Polarbrown-1.jpg/330px-Polarbrown-1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ursus_maritimus_02_MWNH_420.JPG/1280px-Ursus_maritimus_02_MWNH_420.JPG"
    ],
    category: "epipelagic"
  },
  {
    id: "manatee",
    name: "Manatee",
    nameTr: "Deniz İneği",
    depth: 50,
    description: "Deniz inekleri, sığ kıyı bölgelerinde ve nehirlerde yaşayan, uysal ve yavaş hareket eden otobur deniz memelileridir. Günlerinin büyük bir bölümünü su altındaki bitkileri yiyerek ve dinlenerek geçirirler.",
    funFact: "Fillerle ortak bir atadan gelirler ve en yakın yaşayan akrabalarından biri fillerdir.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Underwater_photography_on_endangered_mammal_manatee.jpg/1280px-Underwater_photography_on_endangered_mammal_manatee.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Manatee_skeleton_with_calf.jpg/500px-Manatee_skeleton_with_calf.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/West_Indian_Manatee_Skull.jpg/1280px-West_Indian_Manatee_Skull.jpg"
    ],
    category: "epipelagic"
  },
  {
    id: "killer-whale",
    name: "Killer Whale",
    nameTr: "Katil Balina / Orka",
    depth: 100,
    description: "Aslında yunus ailesinin en büyük üyesi olan orkalar, okyanusların en zeki yırtıcılarındandır. Karmaşık sosyal yapay gruplar (sürüler) halinde yaşarlar ve avlanmak için şaşırtıcı stratejiler geliştirirler.",
    funFact: "Her orka sürüsünün kendine özgü bir iletişim lehçesi (dili) vardır.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/1280px-Killerwhales_jumping.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Female_orca_scale.png/1280px-Female_orca_scale.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Orcinus_citoniensis.JPG/1280px-Orcinus_citoniensis.JPG"
    ],
    category: "epipelagic"
  },
  {
    id: "green-sea-turtle",
    name: "Green Sea Turtle",
    nameTr: "Yeşil Deniz Kaplumbağası",
    depth: 150,
    description: "Dünya genelindeki tropikal ve subtropikal denizlerde yaşayan, göç yetenekleriyle bilinen kaplumbağalardır. Adlarını derilerinin altındaki yeşilimsi yağ tabakasından alırlar.",
    funFact: "Yumurtlamak için binlerce kilometre yüzerek tam olarak kendilerinin dünyaya geldiği kumsala geri dönerler.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg/1280px-Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Taxidermy_of_turtle_shell_%28Chelonia_mydas%29.jpg/1280px-Taxidermy_of_turtle_shell_%28Chelonia_mydas%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Chelonia_mydas_is_going_for_the_air_edit.jpg/1280px-Chelonia_mydas_is_going_for_the_air_edit.jpg"
    ],
    category: "epipelagic"
  },
  {
    id: "whale-shark",
    name: "Whale Shark",
    nameTr: "Balina Köpekbalığı",
    depth: 180,
    description: "Dünyanın en büyük balığı olan balina köpekbalıkları, devasa boyutlarına rağmen tamamen zararsızdırlar. Suyu süzerek sadece planktonlar, küçük balıklar ve deniz analarıyla beslenirler.",
    funFact: "Ağız genişliği 1.5 metreye kadar ulaşabilir ve içinde binlerce mikroskobik diş bulunur.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Similan_Dive_Center_-_great_whale_shark.jpg/500px-Similan_Dive_Center_-_great_whale_shark.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Whale_shark%2C_Nosy_Sakatia%2C_Nosy_Be%2C_Madagascar.jpg/1280px-Whale_shark%2C_Nosy_Sakatia%2C_Nosy_Be%2C_Madagascar.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Rhincodon_typus_jaws.jpg"
    ],
    category: "epipelagic"
  },
  {
    id: "wolf-eel",
    name: "Wolf Eel",
    nameTr: "Kurt Yılan Balığı",
    depth: 220,
    description: "Kuzey Pasifik'in soğuk sularında yaşayan bu canlılar, ürkütücü yüz hatlarına rağmen oldukça uysaldır. Güçlü çeneleri sayesinde deniz kestaneleri, yengeçler ve sert kabuklu deniz canlılarını kolayca ezebilirler.",
    funFact: "Eşlerine son derece sadıktırlar; ömür boyu tek bir eşle yaşar ve yumurtalarını birlikte korurlar.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/February_2%2C_2012_Wolf_Eel_%28really_a_fish%21%29_in_Puget_Sound_%286842178290%29.jpg/500px-February_2%2C_2012_Wolf_Eel_%28really_a_fish%21%29_in_Puget_Sound_%286842178290%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Wolf_Eel_at_Dallas_Children%27s_Aquarium.jpg/1280px-Wolf_Eel_at_Dallas_Children%27s_Aquarium.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/A_small_juvenile_wolfeel_%28Anarrhichthys_ocellatus%29.jpg/1280px-A_small_juvenile_wolfeel_%28Anarrhichthys_ocellatus%29.jpg"
    ],
    category: "mesopelagic"
  },
  {
    id: "chain-catshark",
    name: "Chain Catshark",
    nameTr: "Zincir Kedi Balığı",
    depth: 260,
    description: "Gövdesini saran siyah ve kahverengi zincir benzeri desenleriyle bilinen, küçük yapılı bir köpekbalığı türüdür. Genellikle okyanus tabanındaki kayalık ve mercanlık alanlarda gizlenerek yaşar.",
    funFact: "Gözleri karanlıkta parlar (biyo-florasan özellik taşır), bu da derinlerde iletişim kurmalarına veya yön bulmalarına yardımcı olur.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Scyliorhinus_retifer_SI.jpg/500px-Scyliorhinus_retifer_SI.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Scyliorhinus_retifer_jaws.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Scyliorhinus_retifer_upper_teeth.jpg"
    ],
    category: "mesopelagic"
  },
  {
    id: "ahmed-gabr-record",
    name: "Ahmed Gabr's Scuba Dive",
    nameTr: "Ahmed Gabr Dalış Rekoru",
    depth: 332,
    description: "Mısırlı dalgıç Ahmed Gabr, 2014 yılında Kızıldeniz'de 332.35 metre derinliğe inerek 'Tüplü Dalışla En Derine İnen İnsan' rekorunu kırmıştır. İniş sadece 12 dakika sürerken, vurgun yememek için yukarı çıkış tam 15 saat sürmüştür.",
    funFact: "Bu derinlikteki basınç, insan vücudu üzerine santimetrekare başına yaklaşık 34 kg yük bindirir.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Underwater_photograph_of_a_recreational_scuba_diver_in_Playa_del_Carmen_2006.jpg/500px-Underwater_photograph_of_a_recreational_scuba_diver_in_Playa_del_Carmen_2006.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/ScubaDiver.jpg/1280px-ScubaDiver.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Naufragio_por_Gustavo_Gerdel.jpg/500px-Naufragio_por_Gustavo_Gerdel.jpg"
    ],
    category: "landmark"
  },
  {
    id: "great-white-shark",
    name: "Great White Shark",
    nameTr: "Büyük Beyaz Köpekbalığı",
    depth: 400,
    description: "Okyanusların en ünlü yırtıcılarından biri olan Büyük Beyazlar, inanılmaz koku alma duyularına sahiptir. Avlanmak için yüzeye yakın dursalar da bazen 400-500 metre derinlikteki alacakaranlık bölgesine kadar inebilirler.",
    funFact: "Sudaki tek bir damla kanı 5 kilometre uzaktan tespit edebilirler.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/500px-White_shark.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Evolution_of_the_great_white_shark.jpg/1280px-Evolution_of_the_great_white_shark.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Great_White_Shark_%2814730744390%29.jpg/1280px-Great_White_Shark_%2814730744390%29.jpg"
    ],
    category: "mesopelagic"
  },
  {
    id: "emperor-penguin",
    name: "Emperor Penguin",
    nameTr: "İmparator Penguen",
    depth: 530,
    description: "Penguen türlerinin en büyüğü olan İmparator Penguenler, beslenmek için dondurucu Antarktika sularında inanılmaz derinliklere dalabilirler. Su altında 20 dakikadan fazla kalabilirler.",
    funFact: "Dalarken oksijen tasarrufu sağlamak için kalp atış hızlarını dakikada 15-20 atıma kadar düşürebilirler.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg/500px-Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Kaiserpinguine_mit_Jungen.jpg/1280px-Kaiserpinguine_mit_Jungen.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/2007_Snow-Hill-Island_Luyten-De-Hauwere-Emperor-Penguin-59.jpg/500px-2007_Snow-Hill-Island_Luyten-De-Hauwere-Emperor-Penguin-59.jpg"
    ],
    category: "mesopelagic"
  },
  {
    id: "giant-oarfish",
    name: "Giant Oarfish",
    nameTr: "Dev Kürek Balığı",
    depth: 600,
    description: "Dünyanın en uzun kemikli balığıdır. Yılan benzeri upuzun gümüş gövdesi ve başındaki kırmızı ibiğiyle mitolojideki 'Deniz Canavarı' efsanelerinin kökeni olduğu düşünülmektedir. 11 metreye kadar büyüyebilirler.",
    funFact: "Depremleri önceden hissettiğine ve deprem öncesi sığ sulara çıktığına dair yaygın bir Asya inancı vardır.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Regalecus_glesne%2C_Naturhistorisches_Museum_Wien.jpg/1280px-Regalecus_glesne%2C_Naturhistorisches_Museum_Wien.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/King_of_herrings.png/500px-King_of_herrings.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Regalecus_glesne_skeleton.jpg/1280px-Regalecus_glesne_skeleton.jpg"
    ],
    category: "mesopelagic"
  },
  {
    id: "coelacanth",
    name: "Coelacanth",
    nameTr: "Sölakant",
    depth: 700,
    description: "Dinozorların yok oluşundan çok önce var olan ve neslinin 65 milyon yıl önce tükendiği sanılan bu balık, 1938 yılında Güney Afrika açıklarında canlı olarak bulunarak bilim dünyasında şok etkisi yaratmıştır. Tam bir 'yaşayan fosil'dir.",
    funFact: "Loblu yüzgeçleri karadaki dört üyeli omurgalıların (tetrapod) evrimsel atalarına çok benzemektedir.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Coelacanth_off_Pumula_on_the_KwaZulu-Natal_South_Coast%2C_South_Africa%2C_on_22_November_2019.png/500px-Coelacanth_off_Pumula_on_the_KwaZulu-Natal_South_Coast%2C_South_Africa%2C_on_22_November_2019.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Axelrodichthys_araripensis_-_Naturmuseum_Senckenberg_-_DSC02202.JPG/1280px-Axelrodichthys_araripensis_-_Naturmuseum_Senckenberg_-_DSC02202.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Coelacanthus_granulatus.JPG/1280px-Coelacanthus_granulatus.JPG"
    ],
    category: "mesopelagic"
  },
  {
    id: "japanese-spider-crab",
    name: "Japanese Spider Crab",
    nameTr: "Japon Örümcek Yengeci",
    depth: 800,
    description: "Tüm eklem bacaklılar arasında en geniş bacak açıklığına sahip canlıdır. Bir bacağının ucundan diğerine olan mesafe 3.8 metreye ulaşabilir. Pasifik okyanusunun derin çukurlarında leş yiyerek yaşarlar.",
    funFact: "Bu devasa yengeçlerin ömrü 100 yılı bulabilmektedir.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Macrocheira_kaempferi.jpg/500px-Macrocheira_kaempferi.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Spider_Crab_%2819066404505%29.jpg/1280px-Spider_Crab_%2819066404505%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Spider_crab_at_manila_ocean_park.jpg/1280px-Spider_crab_at_manila_ocean_park.jpg"
    ],
    category: "mesopelagic"
  },
  {
    id: "megamouth-shark",
    name: "Megamouth Shark",
    nameTr: "Büyük Ağızlı Köpekbalığı",
    depth: 900,
    description: "Çok nadir görülen derin deniz köpekbalıklarından biridir. İsminden de anlaşılacağı üzere devasa, yuvarlak bir ağzı vardır. Tıpkı balina köpekbalığı gibi süzerek beslenir. Geceleri beslenmek için dikey göçle sığ sulara çıkar.",
    funFact: "Ağzının iç çeperinde, planktonları kendine çekmek için ışık saçan (biyolüminesans) özel hücreler bulunur.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Megamouth_shark_Megachasma_pelagios.jpg/500px-Megamouth_shark_Megachasma_pelagios.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Worldwide_Megamouth_Sightings.pdf/page1-1280px-Worldwide_Megamouth_Sightings.pdf.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Megamouth_shark_japan2.jpg/500px-Megamouth_shark_japan2.jpg"
    ],
    category: "mesopelagic"
  },
  {
    id: "orange-roughy",
    name: "Orange Roughy",
    nameTr: "Turuncu Kaba Balık",
    depth: 1024,
    description: "Denizin 1000 metre derinliğinde, yani Güneş ışığının tamamen bittiği Gece Yarısı Bölgesinin hemen girişinde yaşar. Parlak turuncu renkleri ve sert, pürüzlü pulları vardır. Çok yavaş büyürler.",
    funFact: "İnanılmaz derecede uzun yaşarlar; bazı bireylerin 200 yıla yakın ömrü olduğu belirlenmiştir.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Hoplostethus_atlanticus_NOAA.jpg/1280px-Hoplostethus_atlanticus_NOAA.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Hoplostethus_atlanticus_02_Pengo.jpg/1280px-Hoplostethus_atlanticus_02_Pengo.jpg"
    ],
    category: "bathypelagic"
  },
  {
    id: "anglerfish",
    name: "Anglerfish",
    nameTr: "Fener Balığı",
    depth: 1200,
    description: "Derin denizlerin sembolü haline gelmiş bu yırtıcının başından sarkan bir 'fener' uzantısı vardır. Fenerin ucundaki ışıklı organ, karanlıkta avlarını kendine çekmek için kullandığı biyolüminesans bakterilerle doludur.",
    funFact: "Erkek fener balıkları dişiye kıyasla çok küçüktür. Dişiyi bulduğunda onu ısırır, zamanla dişinin vücuduyla kaynaşarak sadece bir sperm organına dönüşür (parazitik üreme).",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Lophiiformes_Collage.png/500px-Lophiiformes_Collage.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Pediculati_-_Le_r%C3%A8gne_animal.jpg/1280px-Pediculati_-_Le_r%C3%A8gne_animal.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Histrio_histrio.jpg/500px-Histrio_histrio.jpg"
    ],
    category: "bathypelagic"
  },
  {
    id: "goblin-shark",
    name: "Goblin Shark",
    nameTr: "Goblin Köpekbalığı",
    depth: 1300,
    description: "Pembe renkli gövdesi, uzun burnu ve avını yakalarken şok edici bir hızla öne doğru fırlayan çenesiyle bilinir. 125 milyon yıllık geçmişi olan bir köpekbalığı soyunun yaşayan son temsilcisidir.",
    funFact: "Gevşek kas yapısı ve düşük yoğunluklu karaciğeri sayesinde sıfır enerji harcayarak suyun içinde adeta süzülür.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Mistukurina_owstoni_museum_victoria.jpg/1280px-Mistukurina_owstoni_museum_victoria.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mitsu.JPG/1280px-Mitsu.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mistukurina_owstoni_museum_victoria_-_head_detail.jpg/500px-Mistukurina_owstoni_museum_victoria_-_head_detail.jpg"
    ],
    category: "bathypelagic"
  },
  {
    id: "blobfish",
    name: "Blobfish",
    nameTr: "Damlacık Balığı / Balon Balığı",
    depth: 1500,
    description: "Sudan çıkarıldığında jölemsi bir çamur yığını gibi görünmesi nedeniyle internette 'dünyanın en çirkin hayvanı' seçilmiştir. Ancak derinlerdeki yüksek basınç altında son derece normal, aerodinamik bir balık formundadır.",
    funFact: "Vücut yoğunluğu sudan biraz daha az olduğu için kas gücü harcamadan deniz tabanında asılı kalabilir.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/Psychrolutes_marcidus.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Blobfish_model.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Psychrolutes_marcidus.jpg/500px-Psychrolutes_marcidus.jpg"
    ],
    category: "bathypelagic"
  },
  {
    id: "vampire-squid",
    name: "Vampire Squid",
    nameTr: "Vampir Mürekkepbalığı",
    depth: 1800,
    description: "Kırmızımsı koyu renkleri ve dokunaçları arasındaki pelerin benzeri zar yapısı nedeniyle bu adı almıştır. Diğer kafadan bacaklılar gibi mürekkep püskürtmez; tehlike anında parıldayan biyolüminesans bir mukus salgılar.",
    funFact: "Bilimsel adı 'Vampyroteuthis infernalis', kelime anlamıyla 'Cehennemden gelen vampir mürekkepbalığı' demektir ancak son derece uysaldır.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Vampyroteuthis_illustration.jpg/500px-Vampyroteuthis_illustration.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Vampyroteuthis_infernalis_dorsal_view.jpg/1280px-Vampyroteuthis_infernalis_dorsal_view.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Vampyroteuthis_infernalis_arms.jpg/1280px-Vampyroteuthis_infernalis_arms.jpg"
    ],
    category: "bathypelagic"
  },
  {
    id: "telescope-octopus",
    name: "Telescope Octopus",
    nameTr: "Teleskop Ahtapotu",
    depth: 2000,
    description: "Neredeyse tamamen şeffaf olan gövdesiyle okyanusun karanlığında görünmez gibidir. İsmini, diğer ahtapotlarda bulunmayan ve yukarı doğru bakan, bağımsız hareket edebilen teleskobik gözlerinden alır.",
    funFact: "Şeffaf yapısı sayesinde yırtıcılardan korunmak için hiç enerji harcamadan kamufle olur.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Amphitretus.jpg/1280px-Amphitretus.jpg"
    ],
    category: "bathypelagic"
  },
  {
    id: "gulper-eel",
    name: "Gulper Eel",
    nameTr: "Geniş Ağızlı Yılan Balığı",
    depth: 2200,
    description: "Vücuduna oranla inanılmaz büyüklükte gerinebilen bir ağza ve esnek bir mideye sahiptir. Bu sayede kendisinden çok daha büyük avları tek seferde yutabilir. Kuyruğunun ucunda pembe bir ışık saçan organ bulunur.",
    funFact: "Devasa çenelerine rağmen dişleri çok küçüktür, bu yüzden genellikle küçük balıklar ve karidesleri avlar.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pelican_eel_Eurypharynx_pelecanoides.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Eurypharynx_pelecanoides_1896.jpg"
    ],
    category: "bathypelagic"
  },
  {
    id: "southern-elephant-seal",
    name: "Southern Elephant Seal",
    nameTr: "Güney Fil Foku",
    depth: 2400,
    description: "Dünyanın en büyük etçil deniz memelilerinden biridir. Erkeklerin burunlarındaki hortum benzeri yapıdan dolayı bu adı almışlardır. Beslenmek için inanılmaz derinliklere dalar ve su altında 2 saate yakın kalabilirler.",
    funFact: "Rekor düzeydeki en derin dalışları 2,388 metredir ve bu bir deniz memelisi için olağanüstü bir derinliktir.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/2020-11_Kerguelen_Islands_-_Southern_elephant_seal_30.jpg/1280px-2020-11_Kerguelen_Islands_-_Southern_elephant_seal_30.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Patagonya%27da_deniz_filleri_-_panoramio.jpg/500px-Patagonya%27da_deniz_filleri_-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mirounga_leonina_01.jpg/1280px-Mirounga_leonina_01.jpg"
    ],
    category: "bathypelagic"
  },
  {
    id: "black-swallower",
    name: "Black Swallower",
    nameTr: "Kara Yutucu",
    depth: 2750,
    description: "Küçük yapılı (yaklaşık 25 cm) olmasına rağmen okyanusun en ekstrem avcılarındandır. Midesi o kadar esnektir ki, kendi ağırlığının 10 katı ve boyunun 2 katı büyüklükteki balıkları yutabilir.",
    funFact: "Bazen o kadar büyük balıkları yutar ki, av midede sindirilmeden çürümeye başlar ve ortaya çıkan gazlar balığı yüzeye fırlatır.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Chiasmodon_niger.jpg/500px-Chiasmodon_niger.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Chiasmodon_niger_specimen.jpg/1280px-Chiasmodon_niger_specimen.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/ChiasmodonNigerFord.jpg/1280px-ChiasmodonNigerFord.jpg"
    ],
    category: "bathypelagic"
  },
  {
    id: "sperm-whale",
    name: "Sperm Whale",
    nameTr: "Kaşalot / İspermeçet Balinası",
    depth: 3000,
    description: "Dişli balinaların en büyüğü olan Kaşalotlar, devasa kafaları ve karmaşık sonar sistemleriyle bilinirler. En sevdikleri yiyecek olan dev mürekkep balıklarını avlamak için okyanusun 3000 metre derinliğine kadar dalabilirler.",
    funFact: "Kafalarında bulunan ve ses dalgalarını odaklamaya yarayan 'ispermeçet yağı' balina avcılığı döneminde çok değerliydi.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Mother_and_baby_sperm_whale.jpg/1280px-Mother_and_baby_sperm_whale.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Sperm_whale_blowhole_Vincze.jpg/1280px-Sperm_whale_blowhole_Vincze.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Physeter_macrocephalus_-_skeleton.jpg/1280px-Physeter_macrocephalus_-_skeleton.jpg"
    ],
    category: "bathypelagic"
  },
  {
    id: "giant-isopod",
    name: "Giant Isopod",
    nameTr: "Dev İzopod",
    depth: 3200,
    description: "Bahçelerdeki tesbih böceklerinin derin denizlerde yaşayan devasa akrabalarıdır. Sert bir dış kabuğa ve çok sayıda ayağa sahiptirler. Deniz tabanına çöken ölü hayvan leşleriyle beslenirler.",
    funFact: "Besin kıtlığına inanılmaz derecede dayanıklıdırlar; laboratuvarda 5 yıl boyunca hiçbir şey yemeden hayatta kalan bir izopod kaydedilmiştir.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Bathynomus_kensleyi_and_Bathynomus_doederleinii_NMMBA.jpg/1280px-Bathynomus_kensleyi_and_Bathynomus_doederleinii_NMMBA.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bathynomus_vaderi_paratype_%28Fig._4%29.jpg/1280px-Bathynomus_vaderi_paratype_%28Fig._4%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Bathynomus_giganteus_hi-res.jpg/1280px-Bathynomus_giganteus_hi-res.jpg"
    ],
    category: "bathypelagic"
  },
  {
    id: "barreleye-fish",
    name: "Barreleye Fish",
    nameTr: "Fıçı Gözlü Balık",
    depth: 3500,
    description: "Başının üst kısmı tamamen şeffaf, içi sıvı dolu bir kubbe şeklindedir. Yeşil renkli, fıçı şeklindeki gözleri bu şeffaf kafanın içinde yer alır ve yukarıdaki avların gölgesini tespit etmek için yukarı doğru dönebilir.",
    funFact: "Yeşil mercekleri, yukarıdan gelen zayıf güneş ışığı ile derin deniz canlılarının biyolüminesans ışığını ayırt etmesini sağlar.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Opisthoproctus_soleatus.jpg/500px-Opisthoproctus_soleatus.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Barreleye-fish_GoK.jpg/1280px-Barreleye-fish_GoK.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Opisthoproctus_soleatus.png/500px-Opisthoproctus_soleatus.png"
    ],
    category: "bathypelagic"
  },
  {
    id: "titanic-wreck",
    name: "Wreck of the Titanic",
    nameTr: "Titanic Batığı",
    depth: 3800,
    description: "1912 yılında ilk seferinde bir buzdağına çarparak batan efsanevi yolcu gemisi Titanic, Atlas Okyanusu'nun yaklaşık 3,800 metre derinliğinde iki parça halinde yatmaktadır. Basınç burada yüzeyin 380 katıdır.",
    funFact: "Gemi kalıntıları, 'Halomonas titanicae' adı verilen ve demir yiyen özel bir bakteri türü tarafından yavaş yavaş tüketilmektedir.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/RMS_Titanic_3_%28cropped_to_ship%29.jpg/1280px-RMS_Titanic_3_%28cropped_to_ship%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Olympic_stern_and_rudder.jpg/1280px-Olympic_stern_and_rudder.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/1913_Marconi_operator_room_for_5_kilowatt_ocean_liner_station.JPG/500px-1913_Marconi_operator_room_for_5_kilowatt_ocean_liner_station.JPG"
    ],
    category: "wreck"
  },
  {
    id: "dumbo-octopus",
    name: "Dumbo Octopus",
    nameTr: "Dumbo Ahtapotu",
    depth: 4080,
    description: "Kafasının yanlarında bulunan ve Disney karakteri uçan fil Dumbo'nun kulaklarına benzeyen yüzgeçleri sayesinde bu adı almıştır. Bu yüzgeçleri çırparak suyun içinde süzülür. Oldukça sevimli ve jelimsi bir gövdesi vardır.",
    funFact: "Bilinen tüm ahtapot türleri arasında en derinde (4,000 metre ve daha altında) yaşayabilen türdür.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Dumbo-hires_%28cropped%29.jpg/500px-Dumbo-hires_%28cropped%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Grimpoteuthis_2108m.jpg/500px-Grimpoteuthis_2108m.jpg"
    ],
    category: "abyssopelagic"
  },
  {
    id: "sea-angel",
    name: "Sea Angel",
    nameTr: "Deniz Meleği",
    depth: 4200,
    description: "Saydam ve kanat benzeri yüzgeçleriyle yüzen, adeta havada uçan bir meleği andıran küçük deniz salyangozlarıdır. Abisal derinliklerde zarif hareketlerle süzülürler.",
    funFact: "Melek gibi görünmelerine rağmen yırtıcıdırlar; sadece 'Deniz Kelebekleri' adı verilen diğer kabuklu deniz salyangozlarıyla beslenirler.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Sea_angel.jpg/1280px-Sea_angel.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sea_angels_.jpg/500px-Sea_angels_.jpg"
    ],
    category: "abyssopelagic"
  },
  {
    id: "abyssal-grenadier",
    name: "Abyssal Grenadier",
    nameTr: "Abis Mezgit Balığı / Grenadier",
    depth: 4500,
    description: "Derin deniz tabanlarında en yaygın bulunan balık gruplarındandır. Uzun, sivrilen fare benzeri bir kuyruğa sahip oldukları için 'Rattail' (Fare kuyruğu) olarak da adlandırılırlar. Koku duyuları çok gelişmiştir.",
    funFact: "Düşük metabolizmaları sayesinde okyanus tabanına düşen çok az miktardaki besinlerle aylarca yaşayabilirler.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Coryphaenoides_armatus_1.jpg/960px-Coryphaenoides_armatus_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Coryphaenoides_armatus2.jpg/960px-Coryphaenoides_armatus2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Coryphaenoides_armatus.jpg/960px-Coryphaenoides_armatus.jpg"
    ],
    category: "abyssopelagic"
  },
  {
    id: "giant-squid",
    name: "Giant Squid",
    nameTr: "Dev Mürekkepbalığı",
    depth: 4800,
    description: "Efsanevi deniz canavarı Kraken'e ilham veren bu devasa yumuşakçalar, 13 metre boya ve yüzlerce kilogram ağırlığa ulaşabilirler. Son derece büyük ve hassas gözleri karanlık derinliklerde ışığı toplar.",
    funFact: "Gözlerinin büyüklüğü bir voleybol topu kadardır ve bu, hayvanlar alemindeki en büyük göz boyutudur.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Giant_squid_Ranheim.jpg/500px-Giant_squid_Ranheim.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Giant_squid_tentacle_club.jpg/500px-Giant_squid_tentacle_club.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/A_piece_of_sperm_whale_skin_with_Giant_Squid_sucker_scars.JPG/1280px-A_piece_of_sperm_whale_skin_with_Giant_Squid_sucker_scars.JPG"
    ],
    category: "abyssopelagic"
  },
  {
    id: "sea-cucumber",
    name: "Sea Cucumber",
    nameTr: "Deniz Hıyarı",
    depth: 5000,
    description: "Okyanus tabanındaki tortuları filtreleyerek organik maddeleri yiyen, ekosistem temizliğinde büyük rol oynayan omurgasız canlılardır. Bazı derin deniz türleri yüzebilme yeteneğine sahiptir.",
    funFact: "Tehlike anında yırtıcıları şaşırtmak için iç organlarının bir kısmını vücut dışına fırlatabilirler; bu organlar daha sonra yeniden büyür.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Holothuroidea_orders_collage.png/1280px-Holothuroidea_orders_collage.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Thelenota_ananas.jpg/500px-Thelenota_ananas.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Apostichopus_californicus.004_-_Aquarium_Finisterrae.jpg/500px-Apostichopus_californicus.004_-_Aquarium_Finisterrae.jpg"
    ],
    category: "abyssopelagic"
  },
  {
    id: "deep-sea-brittle-star",
    name: "Deep Sea Brittle Star",
    nameTr: "Derin Deniz Yılan Yıldızı",
    depth: 5500,
    description: "Deniz yıldızlarının yakın akrabası olan, ince, uzun ve son derece kıvrak kollara sahip canlılardır. Okyanus tabanındaki çamurların üzerinde sürünerek mikroskobik canlılarla beslenirler.",
    funFact: "Kolları çok kırılgandır ve kolayca kopabilir, ancak kopan kollarını çok kısa sürede yenileme (rejenerasyon) yeteneğine sahiplerdir.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ophiura_ophiura.jpg/500px-Ophiura_ophiura.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Brittle_starfish_in_kona.jpg/1280px-Brittle_starfish_in_kona.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ophiopetra_lithographica_aboral_larger_010813.jpg/1280px-Ophiopetra_lithographica_aboral_larger_010813.jpg"
    ],
    category: "abyssopelagic"
  },
  {
    id: "uss-johnston-wreck",
    name: "Wreck of the USS Johnston",
    nameTr: "USS Johnston Batığı",
    depth: 6241,
    description: "II. Dünya Savaşı sırasında Leyte Körfezi Muharebesi'nde batan Amerikan muhribi USS Johnston, Filipin Çukuru'nda 6,241 metre derinlikte yer almaktadır. Uzun süre boyunca bulunmuş en derin gemi enkazı ünvanını taşımıştır.",
    funFact: "Enkaz, bu derinlikte oksijen oranının çok düşük olması nedeniyle paslanmaya karşı son derece iyi korunmuş durumdadır.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/USS_Johnston_%28DD-557%29_underway_on_27_October_1943_%28NH_63495%29.jpg/1280px-USS_Johnston_%28DD-557%29_underway_on_27_October_1943_%28NH_63495%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/LCdr._Commander_Ernest_E._Evans%2C_U.S._Navy%2C_at_the_commissioning_ceremonies_of_USS_Johnston_%28DD-557%29_at_Seattle%2C_Washington_%28USA%29%2C_on_27_October_1943_%28NH_63499%29.jpg/1280px-thumbnail.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Christening_of_USS_Johnston_%28DD-557%29_at_Seattle-Tacoma_Shipbuilding_Corporation%2C_Washington_%28USA%29%2C_on_25_March_1943_%28NH_63302%29.jpg/1280px-Christening_of_USS_Johnston_%28DD-557%29_at_Seattle-Tacoma_Shipbuilding_Corporation%2C_Washington_%28USA%29%2C_on_25_March_1943_%28NH_63302%29.jpg"
    ],
    category: "wreck"
  },
  {
    id: "hadal-amphipod",
    name: "Hadal Amphipod",
    nameTr: "Hadal Amfipodu / Kabuklusu",
    depth: 7000,
    description: "Hadal bölgesinin dondurucu ve aşırı basınçlı sularında yaşayan, karidese benzeyen küçük kabuklu canlılardır. Çoğunlukla yukarıdan düşen organik atıklar ve leşlerle beslenirler.",
    funFact: "Basınca dayanabilmek için hücre zarlarını esnek tutan özel kimyasal bileşikler (trimetilamin oksit) üretirler.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Hirondellea_gigas.jpg/500px-Hirondellea_gigas.jpg"
    ],
    category: "hadalpelagic"
  },
  {
    id: "mariana-snailfish",
    name: "Mariana Snailfish",
    nameTr: "Mariana Salyangoz Balığı",
    depth: 8178,
    description: "Dünyanın en derin noktasında yaşayan aktif omurgalı canlıdır. Mariana Çukuru'nda yaklaşık 8,178 metre derinlikte canlı olarak görüntülenmiştir. Vücutları basınca dayanıklı olması için tamamen yumuşak, kemikleri kıkırdaksı ve derisi yarı saydamdır.",
    funFact: "Bu derinlikteki basınç, üzerlerine bir jet uçağının basmasına eşdeğerdir (yaklaşık 1000 atmosfer).",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pseudoliparis_swirei.png/330px-Pseudoliparis_swirei.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
    ],
    category: "hadalpelagic"
  },
  {
    id: "giant-tube-worms",
    name: "Giant Tube Worms",
    nameTr: "Dev Tüp Solucanları",
    depth: 9000,
    description: "Okyanus tabanındaki hidrotermal bacaların (sıcak su kaynakları) çevresinde yaşarlar. Bacalardan çıkan zehirli kükürtlü bileşikleri enerjiye dönüştüren kemosentetik bakterilerle ortakyaşam kurarak beslenirler.",
    funFact: "Gözleri, ağızları veya sindirim sistemleri yoktur. Kırmızı renkli solungaç benzeri yapıları hidrojen sülfürü kandan bakterilere taşır.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Campagne_HOT_-_Vers_g%C3%A9ants_%28Riftia_pachyptila%29_%28Ifremer_00530-64223_-_52381%29.jpg/1280px-Campagne_HOT_-_Vers_g%C3%A9ants_%28Riftia_pachyptila%29_%28Ifremer_00530-64223_-_52381%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/330-PSA-139-64_%28USN_1097019%29_%2822754473376%29.jpg/1280px-330-PSA-139-64_%28USN_1097019%29_%2822754473376%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Tube_worms_ASHES_hydrothermal_field_%2827260324626%29.jpg/1280px-Tube_worms_ASHES_hydrothermal_field_%2827260324626%29.jpg"
    ],
    category: "hadalpelagic"
  },
  {
    id: "trieste-descent",
    name: "Trieste Bathyscaphe Descent",
    nameTr: "Trieste Denizaltı İnişi",
    depth: 10916,
    description: "1960 yılında İsviçreli mühendis Jacques Piccard ve Amerikalı Teğmen Don Walsh, Trieste adlı batiskafla Mariana Çukuru'nun en derin noktası olan Challenger Deep'e inmeyi başarmıştır. Bu, insanlık tarihindeki en derin insanlı dalıştır.",
    funFact: "İniş sırasında yüksek basınç nedeniyle denizaltının dış camlarından birinde çatlak oluşmuş, ancak yapısı sayesinde görevi başarıyla tamamlayıp yüzeye dönebilmişlerdir.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Bathyscaphe_Trieste.jpg/1280px-Bathyscaphe_Trieste.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Bathyscaphe_Trieste_sphere.jpg/500px-Bathyscaphe_Trieste_sphere.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bathyscaphe_Trieste_Piccard-Walsh.jpg/500px-Bathyscaphe_Trieste_Piccard-Walsh.jpg"
    ],
    category: "landmark"
  },
  {
    id: "mariana-trench-bottom",
    name: "Bottom of the Mariana Trench",
    nameTr: "Mariana Çukuru Tabanı",
    depth: 10924,
    description: "Dünya okyanuslarının bilinen en derin noktası olan Challenger Deep'in tabanıdır. Sıcaklık 1 ila 4 santigrat derece civarındadır ve basınç tam 1,086 bardır. Zifiri karanlık, dondurucu soğuk ve ezici basınca rağmen tek hücreli organizmalar (foraminiferler) burada yaşamını sürdürür.",
    funFact: "Eğer Everest Dağı'nı Mariana Çukuru'nun tabanına yerleştirseydik, zirvesi deniz seviyesine ulaşmak için hala 2 kilometreden fazla su altında kalırdı.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Gaskell_HMS_Challenger_II.jpg/500px-Gaskell_HMS_Challenger_II.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kaliningrad_05-2017_img62_Ocean_Museum.jpg/1280px-Kaliningrad_05-2017_img62_Ocean_Museum.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Hakuho_Maru%2C_Fremantle%2C_2019_%2806%29.jpg/1280px-Hakuho_Maru%2C_Fremantle%2C_2019_%2806%29.jpg"
    ],
    category: "landmark"
  }
];
