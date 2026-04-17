require('dotenv').config();
const mysql = require('mysql2/promise');

const states = [
  { id: 1,  name: 'Andaman and Nicobar',                        stateId: 35 },
  { id: 2,  name: 'Andhra Pradesh',                             stateId: 37 },
  { id: 3,  name: 'Arunachal Pradesh',                          stateId: 12 },
  { id: 4,  name: 'Assam',                                      stateId: 18 },
  { id: 5,  name: 'Bihar',                                      stateId: 10 },
  { id: 6,  name: 'Chandigarh',                                 stateId: 4  },
  { id: 7,  name: 'Chhattisgarh',                               stateId: 22 },
  { id: 8,  name: 'Dādra and Nagar Haveli and Damān and Diu',   stateId: 26 },
  { id: 9,  name: 'Delhi',                                      stateId: 7  },
  { id: 10, name: 'Goa',                                        stateId: 30 },
  { id: 11, name: 'Gujarat',                                    stateId: 24 },
  { id: 12, name: 'Haryana',                                    stateId: 6  },
  { id: 13, name: 'Himachal Pradesh',                           stateId: 2  },
  { id: 14, name: 'Jammu and Kashmir',                          stateId: 1  },
  { id: 15, name: 'Jharkhand',                                  stateId: 20 },
  { id: 16, name: 'Karnataka',                                  stateId: 29 },
  { id: 17, name: 'Kerala',                                     stateId: 32 },
  { id: 18, name: 'Ladakh',                                     stateId: 38 },
  { id: 19, name: 'Lakshadweep',                                stateId: 31 },
  { id: 20, name: 'Madhya Pradesh',                             stateId: 23 },
  { id: 21, name: 'Maharashtra',                                stateId: 27 },
  { id: 22, name: 'Manipur',                                    stateId: 14 },
  { id: 23, name: 'Meghalaya',                                  stateId: 17 },
  { id: 24, name: 'Mizoram',                                    stateId: 15 },
  { id: 25, name: 'Nagaland',                                   stateId: 13 },
  { id: 26, name: 'Orissa',                                     stateId: 21 },
  { id: 27, name: 'Puducherry',                                 stateId: 34 },
  { id: 28, name: 'Punjab',                                     stateId: 3  },
  { id: 29, name: 'Rajasthan',                                  stateId: 8  },
  { id: 30, name: 'Sikkim',                                     stateId: 11 },
  { id: 31, name: 'Tamil Nadu',                                 stateId: 33 },
  { id: 32, name: 'Telangana',                                  stateId: 36 },
  { id: 33, name: 'Tripura',                                    stateId: 16 },
  { id: 34, name: 'Uttar Pradesh',                              stateId: 9  },
  { id: 35, name: 'Uttaranchal',                                stateId: 5  },
  { id: 36, name: 'West Bengal',                                stateId: 19 },
];

// Districts keyed by state id (matches states array above)
const districts = {
  1:  ['Nicobar','North and Middle Andaman','South Andaman'],
  2:  ['Alluri Sitharama Raju','Anakapalli','Ananthapuramu','Annamayya','Bapatla','Chittoor','Dr. B.R. Ambedkar Konaseema','East Godavari','Eluru','Guntur','Kakinada','Krishna','Kurnool','Nandyal','NTR','Palnadu','Parvathipuram Manyam','Prakasam','Sri Potti Sriramulu Nellore','Sri Sathya Sai','Srikakulam','Tirupati','Visakhapatnam','Vizianagaram','West Godavari','YSR Kadapa'],
  3:  ['Anjaw','Changlang','Dibang Valley','East Kameng','East Siang','Kamle','Kra Daadi','Kurung Kumey','Lepa Rada','Lohit','Longding','Lower Dibang Valley','Lower Siang','Lower Subansiri','Namsai','Pakke-Kessang','Papum Pare','Shi Yomi','Siang','Tawang','Tirap','Upper Siang','Upper Subansiri','West Kameng','West Siang'],
  4:  ['Bajali','Baksa','Barpeta','Biswanath','Bongaigaon','Cachar','Charaideo','Chirang','Darrang','Dhemaji','Dhubri','Dibrugarh','Dima Hasao','Goalpara','Golaghat','Hailakandi','Hojai','Jorhat','Kamrup','Kamrup Metropolitan','Karbi Anglong','Karimganj','Kokrajhar','Lakhimpur','Majuli','Morigaon','Nagaon','Nalbari','Sivasagar','Sonitpur','South Salmara-Mankachar','Tinsukia','Udalguri','West Karbi Anglong'],
  5:  ['Araria','Arwal','Aurangabad','Banka','Begusarai','Bhagalpur','Bhojpur','Buxar','Darbhanga','East Champaran','Gaya','Gopalganj','Jamui','Jehanabad','Kaimur','Katihar','Khagaria','Kishanganj','Lakhisarai','Madhepura','Madhubani','Munger','Muzaffarpur','Nalanda','Nawada','Patna','Purnia','Rohtas','Saharsa','Samastipur','Saran','Sheikhpura','Sheohar','Sitamarhi','Siwan','Supaul','Vaishali','West Champaran'],
  6:  ['Chandigarh'],
  7:  ['Balod','Baloda Bazar','Balrampur','Bametara','Bijapur','Bilaspur','Dantewada','Dhamtari','Durg','Gariaband','Janjgir-Champa','Jashpur','Kanker','Kawardha','Korba','Koriya','Mahasamund','Mungeli','Narayanpur','Raigarh','Raipur','Rajnandgaon','Sukma','Surajpur','Surguja'],
  8:  ['Dadra and Nagar Haveli','Daman','Diu'],
  9:  ['Central Delhi','East Delhi','New Delhi','North Delhi','North East Delhi','North West Delhi','Shahdara','South Delhi','South East Delhi','South West Delhi','West Delhi'],
  10: ['North Goa','South Goa'],
  11: ['Ahmedabad','Amreli','Anand','Aravalli','Banaskantha','Bharuch','Bhavnagar','Botad','Chhota Udaipur','Dahod','Dang','Devbhoomi Dwarka','Gandhinagar','Gir Somnath','Jamnagar','Junagadh','Kheda','Kutch','Mahisagar','Mehsana','Morbi','Narmada','Navsari','Panchmahal','Patan','Porbandar','Rajkot','Sabarkantha','Surat','Surendranagar','Tapi','Vadodara','Valsad'],
  12: ['Ambala','Bhiwani','Charkhi Dadri','Faridabad','Fatehabad','Gurugram','Hisar','Jhajjar','Jind','Kaithal','Karnal','Kurukshetra','Mahendragarh','Nuh','Palwal','Panchkula','Panipat','Rewari','Rohtak','Sirsa','Sonipat','Yamunanagar'],
  13: ['Bilaspur','Chamba','Hamirpur','Kangra','Kinnaur','Kullu','Lahaul and Spiti','Mandi','Shimla','Sirmaur','Solan','Una'],
  14: ['Anantnag','Bandipora','Baramulla','Budgam','Doda','Ganderbal','Jammu','Kathua','Kishtwar','Kulgam','Kupwara','Poonch','Pulwama','Rajouri','Ramban','Reasi','Samba','Shopian','Srinagar','Udhampur'],
  15: ['Bokaro','Chatra','Deoghar','Dhanbad','Dumka','East Singhbhum','Garhwa','Giridih','Godda','Gumla','Hazaribagh','Jamtara','Khunti','Koderma','Latehar','Lohardaga','Pakur','Palamu','Ramgarh','Ranchi','Sahebganj','Seraikela Kharsawan','Simdega','West Singhbhum'],
  16: ['Bagalkot','Ballari','Belagavi','Bengaluru Rural','Bengaluru Urban','Bidar','Chamarajanagar','Chikkaballapur','Chikkamagaluru','Chitradurga','Dakshina Kannada','Davanagere','Dharwad','Gadag','Hassan','Haveri','Kalaburagi','Kodagu','Kolar','Koppal','Mandya','Mysuru','Raichur','Ramanagara','Shivamogga','Tumakuru','Udupi','Uttara Kannada','Vijayapura','Yadgir'],
  17: ['Alappuzha','Ernakulam','Idukki','Kannur','Kasaragod','Kollam','Kottayam','Kozhikode','Malappuram','Palakkad','Pathanamthitta','Thiruvananthapuram','Thrissur','Wayanad'],
  18: ['Kargil','Leh'],
  19: ['Agatti','Amini','Andrott','Bitra','Chetlat','Kadmat','Kalpeni','Kavaratti','Kiltan','Minicoy'],
  20: ['Agar Malwa','Alirajpur','Anuppur','Ashoknagar','Balaghat','Barwani','Betul','Bhind','Bhopal','Burhanpur','Chhatarpur','Chhindwara','Damoh','Datia','Dewas','Dhar','Dindori','Guna','Gwalior','Harda','Narmadapuram','Indore','Jabalpur','Jhabua','Katni','Khandwa','Khargone','Mandla','Mandsaur','Morena','Narsinghpur','Neemuch','Niwari','Panna','Raisen','Rajgarh','Ratlam','Rewa','Sagar','Satna','Sehore','Seoni','Shahdol','Shajapur','Sheopur','Shivpuri','Sidhi','Singrauli','Tikamgarh','Ujjain','Umaria','Vidisha'],
  21: ['Ahmednagar','Akola','Amravati','Aurangabad','Beed','Bhandara','Buldhana','Chandrapur','Dhule','Gadchiroli','Gondia','Hingoli','Jalgaon','Jalna','Kolhapur','Latur','Mumbai City','Mumbai Suburban','Nagpur','Nanded','Nandurbar','Nashik','Osmanabad','Palghar','Parbhani','Pune','Raigad','Ratnagiri','Sangli','Satara','Sindhudurg','Solapur','Thane','Wardha','Washim','Yavatmal'],
  22: ['Bishnupur','Chandel','Churachandpur','Imphal East','Imphal West','Jiribam','Kakching','Kamjong','Kangpokpi','Noney','Pherzawl','Senapati','Tamenglong','Tengnoupal','Thoubal','Ukhrul'],
  23: ['East Garo Hills','East Jaintia Hills','East Khasi Hills','Eastern West Khasi Hills','North Garo Hills','Ri Bhoi','South Garo Hills','South West Garo Hills','South West Khasi Hills','West Garo Hills','West Jaintia Hills','West Khasi Hills'],
  24: ['Aizawl','Champhai','Hnahthial','Khawzawl','Kolasib','Lawngtlai','Lunglei','Mamit','Saitual','Serchhip'],
  25: ['Chumoukedima','Dimapur','Kiphire','Kohima','Longleng','Mokokchung','Mon','Niuland','Noklak','Peren','Phek','Shamator','Tseminyü','Tuensang','Wokha','Zunheboto'],
  26: ['Angul','Balangir','Balasore','Bargarh','Bhadrak','Boudh','Cuttack','Deogarh','Dhenkanal','Gajapati','Ganjam','Jagatsinghpur','Jajpur','Jharsuguda','Kalahandi','Kandhamal','Kendrapara','Kendujhar','Khordha','Koraput','Malkangiri','Mayurbhanj','Nabarangpur','Nayagarh','Nuapada','Puri','Rayagada','Sambalpur','Subarnapur','Sundergarh'],
  27: ['Karaikal','Mahe','Puducherry','Yanam'],
  28: ['Amritsar','Barnala','Bathinda','Faridkot','Fatehgarh Sahib','Fazilka','Ferozepur','Gurdaspur','Hoshiarpur','Jalandhar','Kapurthala','Ludhiana','Mansa','Moga','Mohali','Muktsar','Nawan Shahr','Pathankot','Patiala','Ropar','Sangrur','Tarn Taran'],
  29: ['Ajmer','Alwar','Banswara','Baran','Barmer','Bharatpur','Bhilwara','Bikaner','Bundi','Chittorgarh','Churu','Dausa','Dholpur','Dungarpur','Hanumangarh','Jaipur','Jaisalmer','Jalore','Jhalawar','Jhunjhunu','Jodhpur','Karauli','Kota','Nagaur','Pali','Pratapgarh','Rajsamand','Sawai Madhopur','Sikar','Sirohi','Sri Ganganagar','Tonk','Udaipur'],
  30: ['East Sikkim','North Sikkim','South Sikkim','West Sikkim'],
  31: ['Ariyalur','Chengalpattu','Chennai','Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kallakurichi','Kancheepuram','Kanyakumari','Karur','Krishnagiri','Madurai','Mayiladuthurai','Nagapattinam','Namakkal','Nilgiris','Perambalur','Pudukkottai','Ramanathapuram','Ranipet','Salem','Sivaganga','Tenkasi','Thanjavur','Theni','Thoothukudi','Tiruchirappalli','Tirunelveli','Tirupathur','Tiruppur','Tiruvallur','Tiruvannamalai','Tiruvarur','Vellore','Viluppuram','Virudhunagar'],
  32: ['Adilabad','Bhadradri Kothagudem','Hanumakonda','Hyderabad','Jagtial','Jangaon','Jayashankar Bhupalpally','Jogulamba Gadwal','Kamareddy','Karimnagar','Khammam','Kumuram Bheem','Mahabubabad','Mahabubnagar','Mancherial','Medak','Medchal-Malkajgiri','Mulugu','Nagarkurnool','Nalgonda','Narayanpet','Nirmal','Nizamabad','Peddapalli','Rajanna Sircilla','Ranga Reddy','Sangareddy','Siddipet','Suryapet','Vikarabad','Wanaparthy','Warangal Rural','Warangal Urban','Yadadri Bhuvanagiri'],
  33: ['Dhalai','Gomati','Khowai','North Tripura','Sepahijala','South Tripura','Unakoti','West Tripura'],
  34: ['Agra','Aligarh','Prayagraj','Ambedkar Nagar','Amethi','Amroha','Auraiya','Azamgarh','Baghpat','Bahraich','Ballia','Balrampur','Banda','Barabanki','Bareilly','Basti','Bhadohi','Bijnor','Budaun','Bulandshahr','Chandauli','Chitrakoot','Deoria','Etah','Etawah','Ayodhya','Farrukhabad','Fatehpur','Firozabad','Gautam Buddha Nagar','Ghaziabad','Ghazipur','Gonda','Gorakhpur','Hamirpur','Hapur','Hardoi','Hathras','Jalaun','Jaunpur','Jhansi','Kannauj','Kanpur Dehat','Kanpur Nagar','Kasganj','Kaushambi','Kushinagar','Lakhimpur Kheri','Lalitpur','Lucknow','Maharajganj','Mahoba','Mainpuri','Mathura','Mau','Meerut','Mirzapur','Moradabad','Muzaffarnagar','Pilibhit','Pratapgarh','Rae Bareli','Rampur','Saharanpur','Sambhal','Sant Kabir Nagar','Shahjahanpur','Shamli','Shravasti','Siddharthnagar','Sitapur','Sonbhadra','Sultanpur','Unnao','Varanasi'],
  35: ['Almora','Bageshwar','Chamoli','Champawat','Dehradun','Haridwar','Nainital','Pauri Garhwal','Pithoragarh','Rudraprayag','Tehri Garhwal','Udham Singh Nagar','Uttarkashi'],
  36: ['Alipurduar','Bankura','Birbhum','Cooch Behar','Dakshin Dinajpur','Darjeeling','Hooghly','Howrah','Jalpaiguri','Jhargram','Kalimpong','Kolkata','Malda','Murshidabad','Nadia','North 24 Parganas','Paschim Bardhaman','Paschim Medinipur','Purba Bardhaman','Purba Medinipur','Purulia','South 24 Parganas','Uttar Dinajpur'],
};

(async () => {
  const conn = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    ssl: { rejectUnauthorized: false }
  });

  // Clear existing data
  await conn.query('DELETE FROM districts');
  await conn.query('DELETE FROM states');
  console.log('Cleared existing states & districts');

  // Insert states
  for (const s of states) {
    await conn.query(
      'INSERT INTO states (id, name, state_id) VALUES (?, ?, ?)',
      [s.id, s.name, s.stateId]
    );
  }
  console.log(`Inserted ${states.length} states`);

  // Insert districts
  let totalDistricts = 0;
  for (const [stateId, names] of Object.entries(districts)) {
    for (const name of names) {
      await conn.query(
        'INSERT INTO districts (state_id, name) VALUES (?, ?)',
        [Number(stateId), name]
      );
      totalDistricts++;
    }
  }
  console.log(`Inserted ${totalDistricts} districts`);

  await conn.end();
  console.log('Done!');
})();
