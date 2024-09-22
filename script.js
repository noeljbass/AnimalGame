const animals = [
    {
        "name": "Lion",
        "image": "https://lionalert.org/wp-content/uploads/2020/02/Facts-about-the-African-Lion.jpg",
        "habitat": "Savanna",
        "location": "Africa",
        "diet": "Carnivore",
        "type": "Mammal"
    },
    {
        "name": "Elephant",
        "image": "https://images.newscientist.com/wp-content/uploads/2023/04/03151144/SEI_150766882.jpg",
        "habitat": "Grasslands, Forests",
        "location": "Africa, Asia",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Penguin",
        "image": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/612763581/1200",
        "habitat": "Antarctic Regions",
        "location": "Antarctica",
        "diet": "Carnivore",
        "type": "Bird"
    },
    {
        "name": "Kangaroo",
        "image": "https://www.thoughtco.com/thmb/FZa2GC2I8z5Ddx__uRyaZr79FPo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/red_kangaroo-24c18ab08dc145f1a798abd4b820390a.jpg",
        "habitat": "Grasslands, Forests",
        "location": "Australia",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Panda",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/330px-Grosser_Panda.JPG",
        "habitat": "Bamboo Forests",
        "location": "China",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Tiger",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/390px-Walking_tiger_female.jpg",
        "habitat": "Forests, Grasslands",
        "location": "Asia",
        "diet": "Carnivore",
        "type": "Mammal"
    },
    {
        "name": "Giraffe",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/330px-Giraffe_Mikumi_National_Park.jpg",
        "habitat": "Savanna, Woodlands",
        "location": "Africa",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Zebra",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Plains_Zebra_Equus_quagga.jpg/330px-Plains_Zebra_Equus_quagga.jpg",
        "habitat": "Savanna, Grasslands",
        "location": "Africa",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Bear",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg/330px-Ours_brun_parcanimalierpyrenees_1.jpg",
        "habitat": "Forests, Mountains",
        "location": "North America, Europe, Asia",
        "diet": "Omnivore",
        "type": "Mammal"
    },
    {
        "name": "Wolf",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Eurasian_wolf_2.jpg/330px-Eurasian_wolf_2.jpg",
        "habitat": "Forests, Grasslands",
        "location": "North America, Europe, Asia",
        "diet": "Carnivore",
        "type": "Mammal"
    },
    {
        "name": "Fox",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vulpes_vulpes_ssp_fulvus.jpg/330px-Vulpes_vulpes_ssp_fulvus.jpg",
        "habitat": "Forests, Grasslands",
        "location": "Worldwide",
        "diet": "Omnivore",
        "type": "Mammal"
    },
    {
        "name": "Cheetah",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/330px-Male_cheetah_facing_left_in_South_Africa.jpg",
        "habitat": "Savanna, Grasslands",
        "location": "Africa, Iran",
        "diet": "Carnivore",
        "type": "Mammal"
    },
    {
        "name": "Hippopotamus",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Portrait_Hippopotamus_in_the_water.jpg/330px-Portrait_Hippopotamus_in_the_water.jpg",
        "habitat": "Rivers, Lakes",
        "location": "Africa",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Rhinoceros",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Waterberg_Nashorn2.jpg/300px-Waterberg_Nashorn2.jpg",
        "habitat": "Grasslands, Savanna",
        "location": "Africa, Asia",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Alligator",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/AmericanAlligator.JPG/180px-AmericanAlligator.JPG",
        "habitat": "Swamps, Rivers",
        "location": "North America",
        "diet": "Carnivore",
        "type": "Reptile"
    },
    {
        "name": "Crocodile",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nile_crocodile_head.jpg/330px-Nile_crocodile_head.jpg",
        "habitat": "Rivers, Lakes",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Reptile"
    },
    {
        "name": "Koala",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/360px-Koala_climbing_tree.jpg",
        "habitat": "Eucalyptus Forests",
        "location": "Australia",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Sloth",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bicho-pregui%C3%A7a_3.jpg/330px-Bicho-pregui%C3%A7a_3.jpg",
        "habitat": "Rainforests",
        "location": "Central and South America",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Otter",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fischotter%2C_Lutra_Lutra.JPG/330px-Fischotter%2C_Lutra_Lutra.JPG",
        "habitat": "Rivers, Lakes",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Mammal"
    },
    {
        "name": "Squirrel",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Squirrel_in_Seurasaari_autumn.JPG/330px-Squirrel_in_Seurasaari_autumn.JPG",
        "habitat": "Forests, Urban Areas",
        "location": "Worldwide",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Bison",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/American_bison_k5680-1.jpg/330px-American_bison_k5680-1.jpg",
        "habitat": "Grasslands, Plains",
        "location": "North America",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Camel",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg/330px-07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg",
        "habitat": "Deserts",
        "location": "Middle East, North Africa",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Gorilla",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg/330px-Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg",
        "habitat": "Tropical Forests",
        "location": "Africa",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Chimpanzee",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/015_Chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg/330px-015_Chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg",
        "habitat": "Tropical Forests",
        "location": "Africa",
        "diet": "Omnivore",
        "type": "Mammal"
    },
    {
        "name": "Orangutan",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG/330px-Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG",
        "habitat": "Tropical Rainforests",
        "location": "Borneo, Sumatra",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Jaguar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/390px-Standing_jaguar.jpg",
        "habitat": "Rainforests, Grasslands",
        "location": "Central and South America",
        "diet": "Carnivore",
        "type": "Mammal"
    },
    {
        "name": "Leopard",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/330px-African_leopard_male_%28cropped%29.jpg",
        "habitat": "Forests, Grasslands",
        "location": "Africa, Asia",
        "diet": "Carnivore",
        "type": "Mammal"
    },
    {
        "name": "Hyena",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Crocuta_crocuta.jpg/330px-Crocuta_crocuta.jpg",
        "habitat": "Savanna, Grasslands",
        "location": "Africa",
        "diet": "Carnivore",
        "type": "Mammal"
    },
    {
        "name": "Antelope",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Blackbuck_male_female.jpg/330px-Blackbuck_male_female.jpg",
        "habitat": "Grasslands, Savanna",
        "location": "Africa, Asia",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Gazelle",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Chinkara_-_Shreeram_M_V_-_Bikaner.jpg/330px-Chinkara_-_Shreeram_M_V_-_Bikaner.jpg",
        "habitat": "Grasslands, Savanna",
        "location": "Africa, Asia",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Ostrich",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Somali_ostrich.jpg/330px-Somali_ostrich.jpg",
        "habitat": "Savanna, Grasslands",
        "location": "Africa",
        "diet": "Herbivore",
        "type": "Bird"
    },
    {
        "name": "Flamingo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flamingos_Laguna_Colorada.jpg/330px-Flamingos_Laguna_Colorada.jpg",
        "habitat": "Wetlands, Lakes",
        "location": "Worldwide",
        "diet": "Omnivore",
        "type": "Bird"
    },
    {
        "name": "Peacock",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Peacock_Plumage.jpg/330px-Peacock_Plumage.jpg",
        "habitat": "Forests, Grasslands",
        "location": "Asia",
        "diet": "Omnivore",
        "type": "Bird"
    },
    {
        "name": "Dolphin",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Dolphin_Encounter-9563.jpg/330px-Dolphin_Encounter-9563.jpg",
        "habitat": "Oceans, Seas",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Mammal"
    },
    {
        "name": "Whale",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Southern_right_whale.jpg/330px-Southern_right_whale.jpg",
        "habitat": "Oceans",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Mammal"
    },
    {
        "name": "Shark",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Corl0207_%2828225976491%29.jpg/330px-Corl0207_%2828225976491%29.jpg",
        "habitat": "Oceans",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Fish"
    },
    {
        "name": "Octopus",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/330px-Octopus2.jpg",
        "habitat": "Oceans",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Mollusk"
    },
    {
        "name": "Sea Turtle",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Chelonia_mydas_is_going_for_the_air_edit.jpg/330px-Chelonia_mydas_is_going_for_the_air_edit.jpg",
        "habitat": "Oceans, Beaches",
        "location": "Worldwide",
        "diet": "Herbivore, Carnivore",
        "type": "Reptile"
    },
    {
        "name": "Starfish",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Starfish%2C_Caswell_Bay_-_geograph.org.uk_-_409413.jpg/330px-Starfish%2C_Caswell_Bay_-_geograph.org.uk_-_409413.jpg",
        "habitat": "Oceans",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Echinoderm"
    },
    {
        "name": "Jellyfish",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Jelly_cc11.jpg/330px-Jelly_cc11.jpg",
        "habitat": "Oceans",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Cnidarian"
    },
    {
        "name": "Crab",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gecarcinus_quadratus_%28Nosara%29.jpg/330px-Gecarcinus_quadratus_%28Nosara%29.jpg",
        "habitat": "Oceans, Beaches",
        "location": "Worldwide",
        "diet": "Omnivore",
        "type": "Crustacean"
    },
    {
        "name": "Lobster",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KreeftbijDenOsse.jpg/330px-KreeftbijDenOsse.jpg",
        "habitat": "Oceans",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Crustacean"
    },
    {
        "name": "Ant",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Bullant_head_detail.jpg/330px-Bullant_head_detail.jpg",
        "habitat": "Forests, Urban Areas",
        "location": "Worldwide",
        "diet": "Omnivore",
        "type": "Insect"
    },
    {
        "name": "Bee",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Tetragonula_carbonaria_%2814521993792%29.jpg/330px-Tetragonula_carbonaria_%2814521993792%29.jpg",
        "habitat": "Gardens, Forests",
        "location": "Worldwide",
        "diet": "Herbivore",
        "type": "Insect"
    },
    {
        "name": "Butterfly",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Fesoj_-_Papilio_machaon_%28by%29.jpg/330px-Fesoj_-_Papilio_machaon_%28by%29.jpg",
        "habitat": "Gardens, Forests",
        "location": "Worldwide",
        "diet": "Herbivore",
        "type": "Insect"
    },
    {
        "name": "Ladybug",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Coccinella-septempunctata-15-fws.jpg/330px-Coccinella-septempunctata-15-fws.jpg",
        "habitat": "Gardens, Forests",
        "location": "Worldwide",
        "diet": "Herbivore",
        "type": "Insect"
    },
    {
        "name": "Frog",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Variegated_golden_frog_%28Mantella_baroni%29_Ranomafana.jpg/330px-Variegated_golden_frog_%28Mantella_baroni%29_Ranomafana.jpg",
        "habitat": "Wetlands, Forests",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Amphibian"
    },
    {
        "name": "Toad",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Bombina_bombina_1_%28Marek_Szczepanek%29.jpg/330px-Bombina_bombina_1_%28Marek_Szczepanek%29.jpg",
        "habitat": "Wetlands, Forests",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Amphibian"
    },
    {
        "name": "Newt",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Uhandre_goimenditarra.jpg/330px-Uhandre_goimenditarra.jpg",
        "habitat": "Wetlands, Forests",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Amphibian"
    },
    {
        "name": "Iguana",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Green_Iguana_In_Florida.jpg/330px-Green_Iguana_In_Florida.jpg",
        "habitat": "Tropical Forests",
        "location": "Central and South America",
        "diet": "Herbivore",
        "type": "Reptile"
    },
    {
        "name": "Chameleon",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Chameleon_in_Berenty_Madagascar_0001.JPG/330px-Chameleon_in_Berenty_Madagascar_0001.JPG",
        "habitat": "Tropical Forests",
        "location": "Africa, Madagascar",
        "diet": "Insectivore",
        "type": "Reptile"
    },
    {
        "name": "Gecko",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Phelsuma_l._laticauda.jpg/330px-Phelsuma_l._laticauda.jpg",
        "habitat": "Tropical Forests, Deserts",
        "location": "Worldwide",
        "diet": "Insectivore",
        "type": "Reptile"
    },
    {
        "name": "Tortoise",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/A._gigantea_Aldabra_Giant_Tortoise.jpg/330px-A._gigantea_Aldabra_Giant_Tortoise.jpg",
        "habitat": "Deserts, Forests",
        "location": "Worldwide",
        "diet": "Herbivore",
        "type": "Reptile"
    },
    {
        "name": "Parrot",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Eclectus_roratus-20030511.jpg/330px-Eclectus_roratus-20030511.jpg",
        "habitat": "Tropical Forests",
        "location": "Worldwide",
        "diet": "Herbivore",
        "type": "Bird"
    },
    {
        "name": "Canary",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Serinus_canaria_-Parque_Rural_del_Nublo%2C_Gran_Canaria%2C_Spain_-male-8a.jpg/330px-Serinus_canaria_-Parque_Rural_del_Nublo%2C_Gran_Canaria%2C_Spain_-male-8a.jpg",
        "habitat": "Forests, Urban Areas",
        "location": "Worldwide",
        "diet": "Herbivore",
        "type": "Bird"
    },
    {
        "name": "Goldfish",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Gold_fish1.jpg/330px-Gold_fish1.jpg",
        "habitat": "Freshwater",
        "location": "Worldwide",
        "diet": "Herbivore",
        "type": "Fish"
    },
    {
        "name": "Betta Fish",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kampffisch_betta_splendenscele4.jpg/255px-Kampffisch_betta_splendenscele4.jpg",
        "habitat": "Freshwater",
        "location": "Southeast Asia",
        "diet": "Carnivore",
        "type": "Fish"
    },
    {
        "name": "Pufferfish",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Goldringel-Kugelfisch.JPG/418px-Goldringel-Kugelfisch.JPG",
        "habitat": "Oceans, Coral Reefs",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Fish"
    },
    {
        "name": "Angelfish",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Freshwater_angelfish_biodome.jpg/220px-Freshwater_angelfish_biodome.jpg",
        "habitat": "Freshwater, Coral Reefs",
        "location": "Worldwide",
        "diet": "Herbivore",
        "type": "Fish"
    },
    {
        "name": "Clownfish",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Amphiprion_ocellaris_%28Clown_anemonefish%29_in_Heteractis_magnifica_%28Sea_anemone%29.jpg/220px-Amphiprion_ocellaris_%28Clown_anemonefish%29_in_Heteractis_magnifica_%28Sea_anemone%29.jpg",
        "habitat": "Coral Reefs",
        "location": "Worldwide",
        "diet": "Omnivore",
        "type": "Fish"
    },
    {
        "name": "Seahorse",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Hippocampus.jpg/220px-Hippocampus.jpg",
        "habitat": "Coral Reefs, Seagrass Beds",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Fish"
    },
    {
        "name": "Narwhal",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Narwal_brehm.jpg/200px-Narwal_brehm.jpg",
        "habitat": "Arctic Waters",
        "location": "Arctic",
        "diet": "Carnivore",
        "type": "Mammal"
    },
    {
        "name": "Manatee",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Mother_manatee_and_calf.jpg/330px-Mother_manatee_and_calf.jpg",
        "habitat": "Coastal Waters, Rivers",
        "location": "North America, Caribbean",
        "diet": "Herbivore",
        "type": "Mammal"
    },
    {
        "name": "Walrus",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pacific_Walrus_-_Bull_%288247646168%29.jpg/330px-Pacific_Walrus_-_Bull_%288247646168%29.jpg",
        "habitat": "Arctic Waters",
        "location": "Arctic",
        "diet": "Carnivore",
        "type": "Mammal"
    },
    {
        "name": "Manta Ray",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dharavandhoo_Thila_-_Manata_Black_Pearl.JPG/330px-Dharavandhoo_Thila_-_Manata_Black_Pearl.JPG",
        "habitat": "Oceans",
        "location": "Worldwide",
        "diet": "Plankton",
        "type": "Fish"
    },
    {
        "name": "Stingray",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/SStringray.jpg/330px-SStringray.jpg",
        "habitat": "Oceans, Coastal Waters",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Fish"
    },
    {
        "name": "Bald Eagle",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg/330px-Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg",
        "habitat": "Forests, Near Water",
        "location": "North America",
        "diet": "Carnivore",
        "type": "Bird"
    },
    {
        "name": "Hummingbird",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bee_hummingbird_%28Mellisuga_helenae%29_adult_male_non-breeding.jpg/330px-Bee_hummingbird_%28Mellisuga_helenae%29_adult_male_non-breeding.jpg",
        "habitat": "Gardens, Forests",
        "location": "Worldwide",
        "diet": "Nectar",
        "type": "Bird"
    },
    {
        "name": "Vulture",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gyps_rueppellii_-Nairobi_National_Park%2C_Kenya-8-4c.jpg/330px-Gyps_rueppellii_-Nairobi_National_Park%2C_Kenya-8-4c.jpg",
        "habitat": "Open Areas, Mountains",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Bird"
    },
    {
        "name": "Owl",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Athene_cuniculariaa.jpg/255px-Athene_cuniculariaa.jpg",
        "habitat": "Forests, Grasslands",
        "location": "Worldwide",
        "diet": "Carnivore",
        "type": "Bird"
    },
    {
        "name": "Pigeon",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Treron_vernans_male_-_Kent_Ridge_Park.jpg/330px-Treron_vernans_male_-_Kent_Ridge_Park.jpg",
        "habitat": "Urban Areas, Forests",
        "location": "Worldwide",
        "diet": "Herbivore",
        "type": "Bird"
    },
    {
        "name": "Crow",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Corvus_corone_-near_Canford_Cliffs%2C_Poole%2C_England-8.jpg/330px-Corvus_corone_-near_Canford_Cliffs%2C_Poole%2C_England-8.jpg",
        "habitat": "Urban Areas, Forests",
        "location": "Worldwide",
        "diet": "Omnivore",
        "type": "Bird"
    },
    {
        "name": "Raven",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/3782_Common_Raven_in_flight.jpg/330px-3782_Common_Raven_in_flight.jpg",
        "habitat": "Forests, Mountains",
        "location": "Worldwide",
        "diet": "Omnivore",
        "type": "Bird"
    },
    {
        "name": "Swan",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Cygnus_olor_2_%28Marek_Szczepanek%29.jpg/330px-Cygnus_olor_2_%28Marek_Szczepanek%29.jpg",
        "habitat": "Lakes, Rivers",
        "location": "Worldwide",
        "diet": "Herbivore",
        "type": "Bird"
    },
    {
        "name": "Duck",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bucephala-albeola-010.jpg/330px-Bucephala-albeola-010.jpg",
        "habitat": "Lakes, Rivers",
        "location": "Worldwide",
        "diet": "Omnivore",
        "type": "Bird"
    },
    {
        "name": "Goose",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Anser_anser_1_%28Piotr_Kuczynski%29.jpg/450px-Anser_anser_1_%28Piotr_Kuczynski%29.jpg",
        "habitat": "Lakes, Rivers",
        "location": "Worldwide",
        "diet": "Herbivore",
        "type": "Bird"
    },
    {
        "name": "Armadillo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Chaetophractus_vellerosus3.jpg/330px-Chaetophractus_vellerosus3.jpg",
        "habitat": "Grasslands, Forests",
        "location": "Americas",
        "diet": "Insectivore",
        "type": "Mammal"
    }
];

document.getElementById('randomAnimalBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    const animal = animals[randomIndex];

    document.getElementById('animalImage').src = animal.image;
    document.getElementById('animalName').innerText = animal.name;
    document.getElementById('animalHabitat').innerText = animal.habitat;
    document.getElementById('animalLocation').innerText = animal.location;
    document.getElementById('animalDiet').innerText = animal.diet;
    document.getElementById('animalType').innerText = animal.type;
});
