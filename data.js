const data = [
    {
      id: 1,
      group_id: 'ANM_1',
      name: 'Azad Navyuvak Mandal',
      location: 'Raipur, CG',
      since: 2018,
      description: 'Azad Navyuvak Mandal is a vibrant youth organization based in Raipur, Chhattisgarh. Founded in 2018, the group has quickly become a hub for young people passionate about community service, cultural activities, and social change. With a focus on empowering youth and fostering a sense of unity, Azad Navyuvak Mandal organizes a wide range of events throughout the year, including festivals, charity drives, educational workshops, and sports tournaments. The group is known for its inclusive and energetic approach, attracting members from diverse backgrounds who share a common goal of making a positive impact in their community.',
      contact_numbers: ['9876543210', '9123456780'],
      admins: [],
      events: [
        { id: 101, title: 'Ganesh Utsav 2026', year_count: 5, start_date: '2026-02-01', end_date: '2026-02-11', location: 'Raipur Main Ground', description: 'Celebrate the vibrant festival of Ganesh Utsav with us! Join us for 10 days of cultural performances, community feasts, and spiritual activities as we honor Lord Ganesha. The event will feature traditional music and dance, delicious food stalls, and a grand procession on the final day. Don\'t miss this opportunity to experience the rich cultural heritage of Raipur and connect with fellow community members in a joyous celebration!', images: ['https://loremflickr.com/600/400?lock=1', 'https://loremflickr.com/600/400?lock=2', 'https://loremflickr.com/600/400?lock=3', 'https://loremflickr.com/600/400?lock=4'] },
        { id: 102, title: 'Blood Donation Camp', year_count: 2, start_date: '2026-03-10', end_date: '2026-03-15', location: 'City Hospital', description: 'Save lives by donating blood! Our community blood donation camp provides a safe and hygienic environment for blood donors. Every donation can save up to three lives. Medical professionals will conduct health checks, and all donors will receive refreshments and certificates of appreciation. Join us in this noble cause!', images: ['https://loremflickr.com/600/400?lock=5', 'https://loremflickr.com/600/400?lock=6', 'https://loremflickr.com/600/400?lock=7'] },
        { id: 103, title: 'Cricket League', year_count: 10, start_date: '2026-11-01', end_date: '2026-11-12', location: 'Sports Stadium', description: 'Experience thrilling cricket action in our annual league tournament! Teams from across the city will compete in this exciting 12-day event featuring matches, skill demonstrations, and awards for outstanding performances. Whether you\'re a player or a spectator, this is the ultimate cricket celebration!', images: ['https://loremflickr.com/600/400?lock=8', 'https://loremflickr.com/600/400?lock=9', 'https://loremflickr.com/600/400?lock=10', 'https://loremflickr.com/600/400?lock=11'] }
      ]
    },
    {
      id: 2,
      group_id: 'ESB_2',
      name: 'Ekta Samiti Bhilai',
      location: 'Bhilai, CG',
      since: 2010,
      description: 'Ekta Samiti Bhilai is a cultural and social organization dedicated to preserving local traditions and supporting community welfare.',
      contact_numbers: ['9876123456', '9123456781'],
      admins: [],
      events: [
        { id: 201, title: 'Durga Puja 2025', year_count: 51, start_date: '2026-01-10', end_date: '2026-01-20', location: 'Sector 6 Park', description: 'Join us for the most revered festival celebration! This 51-year-old tradition brings together thousands of devotees for cultural performances, traditional feasts, and spiritual ceremonies to honor Goddess Durga. Experience intricate decorations, elaborate pujas, and community bonding at its finest!', images: ['https://loremflickr.com/600/400?lock=12', 'https://loremflickr.com/600/400?lock=13', 'https://loremflickr.com/600/400?lock=14', 'https://loremflickr.com/600/400?lock=15'] },
        { id: 202, title: 'Garba Night', year_count: 5, start_date: '2025-12-15', end_date: '2025-12-25', location: 'Community Hall', description: 'Dance into the festive season with our vibrant Garba Night! This traditional circular dance celebrates the joy of togetherness. Come dressed in colorful attire to participate in group dances, enjoy music, and connect with the community in a fun and energetic atmosphere!', images: ['https://loremflickr.com/600/400?lock=16', 'https://loremflickr.com/600/400?lock=17', 'https://loremflickr.com/600/400?lock=18'] },
        { id: 203, title: 'Diwali Mela', year_count: 8, start_date: '2026-11-05', end_date: '2026-11-15', location: 'Civic Center', description: 'Experience the festival of lights like never before! Our Diwali Mela is a grand celebration featuring food stalls, cultural performances, fireworks, and shopping. Families and friends gather to celebrate prosperity, happiness, and the victory of good over evil.', images: ['https://loremflickr.com/600/400?lock=19', 'https://loremflickr.com/600/400?lock=20', 'https://loremflickr.com/600/400?lock=21', 'https://loremflickr.com/600/400?lock=22'] },
        { id: 204, title: 'Winter Charity Drive', year_count: 12, start_date: '2026-01-28', end_date: '2026-02-08', location: 'Station Road', description: 'Spread warmth this winter! Our 12-year tradition of charity helps underprivileged families during the cold season. We collect and distribute blankets, warm clothes, and essentials. Your contribution can make a real difference in someone\'s life.', images: ['https://loremflickr.com/600/400?lock=23', 'https://loremflickr.com/600/400?lock=24', 'https://loremflickr.com/600/400?lock=25'] }
      ]
    },
    {
      id: 3,
      group_id: 'SSSM_3',
      name: 'Shiv Shakti Sewa Mandal',
      location: 'Durg, CG',
      since: 2005,
      description: 'Shiv Shakti Sewa Mandal is a spiritual and social organization focused on community service and religious ceremonies.',
      contact_numbers: ['9876234567', '9123456782'],
      admins: [],
      events: [
        { id: 301, title: 'Maha Shivratri Bhandara', year_count: 15, start_date: '2026-01-30', end_date: '2026-02-10', location: 'Shiv Mandir', description: 'Celebrate the great night of Lord Shiva with traditional bhandara (community feast)! This 15-year-old event honors Shiva worship through prayers, meditation, and free meals for all devotees. Experience spiritual awakening and community solidarity.', images: ['https://loremflickr.com/600/400?lock=26', 'https://loremflickr.com/600/400?lock=27', 'https://loremflickr.com/600/400?lock=28', 'https://loremflickr.com/600/400?lock=29'] },
        { id: 302, title: 'Yoga Workshop', year_count: 3, start_date: '2026-04-01', end_date: '2026-04-12', location: 'Yoga Center', description: 'Achieve wellness and inner peace through guided yoga sessions! Our expert instructors will teach you traditional asanas, pranayama, and meditation techniques. Perfect for beginners and experienced practitioners alike.', images: ['https://loremflickr.com/600/400?lock=30', 'https://loremflickr.com/600/400?lock=31', 'https://loremflickr.com/600/400?lock=32'] },
        { id: 303, title: 'Satsang Series', year_count: 7, start_date: '2026-01-20', end_date: '2026-02-04', location: 'Satsang Bhawan', description: 'Join our 7-year tradition of spiritual gatherings! Satsang brings together people for meaningful discussions, devotional singing, and spiritual teachings. A unique opportunity to explore inner consciousness and connect with like-minded seekers.', images: ['https://loremflickr.com/600/400?lock=33', 'https://loremflickr.com/600/400?lock=34', 'https://loremflickr.com/600/400?lock=35', 'https://loremflickr.com/600/400?lock=36'] },
        { id: 304, title: 'Temple Renovation', year_count: 4, start_date: '2026-06-01', end_date: '2026-06-10', location: 'Old Temple', description: 'Be part of preserving our heritage! Help us restore and beautify the historic temple through community participation. Every contribution, big or small, helps preserve the cultural and spiritual significance of this sacred place.', images: ['https://loremflickr.com/600/400?lock=37', 'https://loremflickr.com/600/400?lock=38', 'https://loremflickr.com/600/400?lock=39'] },
        { id: 305, title: 'Free Medical Checkup', year_count: 6, start_date: '2026-01-29', end_date: '2026-02-09', location: 'Health Clinic', description: 'Your health matters! Our free medical camp provides comprehensive health examinations, consultations, and basic treatments. Qualified doctors and healthcare professionals are available for everyone in the community.', images: ['https://loremflickr.com/600/400?lock=40', 'https://loremflickr.com/600/400?lock=41', 'https://loremflickr.com/600/400?lock=42', 'https://loremflickr.com/600/400?lock=43'] }
      ]
    },
    {
      id: 4,
      group_id: 'PWG_4',
      name: 'Pragati Welfare Group',
      location: 'Bilaspur, CG',
      since: 2019,
      description: 'Pragati Welfare Group drives social change through street awareness, environmental conservation, and community empowerment initiatives.',
      contact_numbers: ['9876345678', '9123456783'],
      admins: [],
      events: [
        { id: 401, title: 'Street Play (Nukkad)', year_count: 2, start_date: '2026-01-27', end_date: '2026-02-06', location: 'Main Market', description: 'Experience socially relevant performances right on the streets! Our street plays tackle important social issues through engaging theatrical performances. This unique art form brings awareness and entertainment to the public square.', images: ['https://loremflickr.com/600/400?lock=44', 'https://loremflickr.com/600/400?lock=45', 'https://loremflickr.com/600/400?lock=46'] },
        { id: 402, title: 'Clean City Campaign', year_count: 5, start_date: '2026-01-25', end_date: '2026-02-08', location: 'City Squares', description: 'Make our city cleaner and greener! Join our 5-year initiative to clean public spaces, remove litter, and promote environmental awareness. Together, we create a healthier and more beautiful city for everyone.', images: ['https://loremflickr.com/600/400?lock=47', 'https://loremflickr.com/600/400?lock=48', 'https://loremflickr.com/600/400?lock=49', 'https://loremflickr.com/600/400?lock=50'] },
        { id: 403, title: 'Plantation Drive', year_count: 9, start_date: '2026-07-01', end_date: '2026-07-15', location: 'River Bank', description: 'Plant trees and grow the future! Our plantation drive aims to increase green cover and combat climate change. Join us in planting thousands of trees along the river bank and witness your contribution to environmental conservation.', images: ['https://loremflickr.com/600/400?lock=51', 'https://loremflickr.com/600/400?lock=52', 'https://loremflickr.com/600/400?lock=53'] }
      ]
    },
    {
      id: 5,
      group_id: 'RSYC_5',
      name: 'Rising Star Youth Club',
      location: 'Raigarh, CG',
      since: 2021,
      description: 'Rising Star Youth Club nurtures young talent through sports, education, and personality development programs.',
      contact_numbers: ['9876456789', '9123456784'],
      admins: [],
      events: [
        { id: 501, title: 'Dance Competition', year_count: 4, start_date: '2026-05-15', end_date: '2026-05-25', location: 'Town Hall', description: 'Showcase your dance talent! Our annual dance competition welcomes dancers of all styles and skill levels. Compete for prizes, recognition, and the opportunity to perform on stage. It\'s a celebration of movement, music, and talent!', images: ['https://loremflickr.com/600/400?lock=54', 'https://loremflickr.com/600/400?lock=55', 'https://loremflickr.com/600/400?lock=56', 'https://loremflickr.com/600/400?lock=57'] },
        { id: 502, title: 'Summer Coaching', year_count: 8, start_date: '2026-01-22', end_date: '2026-02-05', location: 'School Ground', description: 'Empower students for success! Our summer coaching program provides academic support in key subjects. Expert tutors help students strengthen fundamentals and prepare for exams. Make the most of your summer break!', images: ['https://loremflickr.com/600/400?lock=58', 'https://loremflickr.com/600/400?lock=59', 'https://loremflickr.com/600/400?lock=60'] },
        { id: 503, title: 'Football Tournament', year_count: 6, start_date: '2026-01-24', end_date: '2026-02-07', location: 'Sports Complex', description: 'Goal! Experience the thrill of competitive football! Our tournament brings together talented players for intense matches, thrilling goals, and team spirit. Support your favorite teams and enjoy this exciting sporting extravaganza!', images: ['https://loremflickr.com/600/400?lock=61', 'https://loremflickr.com/600/400?lock=62', 'https://loremflickr.com/600/400?lock=63', 'https://loremflickr.com/600/400?lock=64'] },
        { id: 504, title: 'Cyber Security Seminar', year_count: 1, start_date: '2026-08-05', end_date: '2026-08-10', location: 'College Auditorium', description: 'Protect yourself in the digital age! Learn about cyber threats, data protection, and online safety from industry experts. This inaugural seminar equips you with essential cybersecurity knowledge for the modern world.', images: ['https://loremflickr.com/600/400?lock=65', 'https://loremflickr.com/600/400?lock=66', 'https://loremflickr.com/600/400?lock=67'] }
      ]
    },
    {
      id: 6,
      group_id: 'MP_6',
      name: 'Maitri Pariwar',
      location: 'Korba, CG',
      since: 1995,
      description: 'Maitri Pariwar is a trusted community organization with 28+ years of experience in social welfare, charity, and environmental conservation.',
      contact_numbers: ['9876567890', '9123456785'],
      admins: [],
      events: [
        { id: 601, title: 'Holi Milan', year_count: 20, start_date: '2026-01-05', end_date: '2026-01-15', location: 'Club House', description: 'Celebrate colors and unity! Our 20-year tradition of Holi brings the community together for a joyous festival. Experience colored powder showers, traditional sweets, and genuine bonding. This is the perfect time to forgive, forget, and celebrate relationships!', images: ['https://loremflickr.com/600/400?lock=68', 'https://loremflickr.com/600/400?lock=69', 'https://loremflickr.com/600/400?lock=70', 'https://loremflickr.com/600/400?lock=71'] },
        { id: 602, title: 'Tree Adoption', year_count: 3, start_date: '2026-01-26', end_date: '2026-02-06', location: 'City Parks', description: 'Become a tree guardian! Adopt a tree and help nurture it for years to come. Your adoption supports environmental conservation and creates green spaces for the community. Track your tree\'s growth and make a lasting impact!', images: ['https://loremflickr.com/600/400?lock=72', 'https://loremflickr.com/600/400?lock=73', 'https://loremflickr.com/600/400?lock=74'] },
        { id: 603, title: 'Old Age Home Visit', year_count: 7, start_date: '2026-01-28', end_date: '2026-02-07', location: 'Old Age Home', description: 'Bring joy to seniors! Our care visits provide companionship, assistance, and love to elderly residents. Share stories, play games, and spend meaningful time with people who appreciate interaction. Make a difference one visit at a time!', images: ['https://loremflickr.com/600/400?lock=75', 'https://loremflickr.com/600/400?lock=76', 'https://loremflickr.com/600/400?lock=77', 'https://loremflickr.com/600/400?lock=78'] },
        { id: 604, title: 'Digital Literacy Camp', year_count: 2, start_date: '2026-09-01', end_date: '2026-09-12', location: 'Community Center', description: 'Bridge the digital divide! Learn essential computer and internet skills. Our camp teaches basic computer operations, email, online safety, and digital tools. Perfect for those new to technology and wanting to stay connected.', images: ['https://loremflickr.com/600/400?lock=79', 'https://loremflickr.com/600/400?lock=80', 'https://loremflickr.com/600/400?lock=81'] },
        { id: 605, title: 'Handicraft Exhibition', year_count: 5, start_date: '2026-10-02', end_date: '2026-10-10', location: 'Exhibition Ground', description: 'Celebrate local artistry! Showcase traditional and contemporary handicrafts from talented artisans. Visitors can view, purchase, and support local craftspeople. A perfect blend of art, culture, and commerce!', images: ['https://loremflickr.com/600/400?lock=82', 'https://loremflickr.com/600/400?lock=83', 'https://loremflickr.com/600/400?lock=84', 'https://loremflickr.com/600/400?lock=85'] },
        { id: 606, title: 'Food Donation', year_count: 12, start_date: '2026-01-20', end_date: '2026-02-04', location: 'Slum Area', description: 'Feed the hungry! Our 12-year food donation drive ensures no one goes hungry. We collect and distribute nutritious meals to underprivileged families and individuals. Every meal is prepared with care and served with compassion.', images: ['https://loremflickr.com/600/400?lock=86', 'https://loremflickr.com/600/400?lock=87', 'https://loremflickr.com/600/400?lock=88'] }
      ]
    },
    {
      id: 7,
      group_id: 'SKM_7',
      name: 'Sanskriti Kala Manch',
      location: 'Jagdalpur, CG',
      since: 2008,
      description: 'Sanskriti Kala Manch celebrates tribal and local art, promoting cultural heritage and artistic expression through festivals and exhibitions.',
      contact_numbers: ['9876678901', '9123456786'],
      admins: [],
      events: [
        { id: 701, title: 'Tribal Art Fest', year_count: 25, start_date: '2026-01-29', end_date: '2026-02-09', location: 'Art Gallery', description: 'Celebrate tribal heritage and artistry! This 25-year celebration showcases magnificent tribal art, traditional crafts, and cultural performances. Discover the rich history and talent of tribal communities through art exhibitions and demonstrations.', images: ['https://loremflickr.com/600/400?lock=89', 'https://loremflickr.com/600/400?lock=90', 'https://loremflickr.com/600/400?lock=91', 'https://loremflickr.com/600/400?lock=92'] },
        { id: 702, title: 'Photography Contest', year_count: 4, start_date: '2026-08-19', end_date: '2026-08-30', location: 'Online', description: 'Capture moments, win recognition! Photographers of all levels can submit their best work. Categories include nature, culture, portraits, and abstracts. Showcase your creative vision and compete for prizes and publication!', images: ['https://loremflickr.com/600/400?lock=93', 'https://loremflickr.com/600/400?lock=94', 'https://loremflickr.com/600/400?lock=95'] },
        { id: 703, title: 'Local Music Night', year_count: 6, start_date: '2026-11-14', end_date: '2026-11-20', location: 'Music Hall', description: 'Feel the rhythm of local talent! Our music nights feature local musicians and bands performing diverse genres. From traditional to contemporary, this is a platform for musical expression and community entertainment.', images: ['https://loremflickr.com/600/400?lock=96', 'https://loremflickr.com/600/400?lock=97', 'https://loremflickr.com/600/400?lock=98', 'https://loremflickr.com/600/400?lock=99'] }
      ]
    },
    {
      id: 8,
      group_id: 'UF_8',
      name: 'Umeed Foundation',
      location: 'Ambikapur, CG',
      since: 2012,
      description: 'Umeed Foundation works towards educational empowerment and skill development for underprivileged communities.',
      contact_numbers: ['9876789012', '9123456787'],
      admins: [],
      events: [
        { id: 801, title: 'Scholarship Exam', year_count: 10, start_date: '2026-01-30', end_date: '2026-02-12', location: 'School Exam Hall', description: 'Transform education through scholarships! Our 10-year scholarship program helps deserving students access quality education. Participate in our merit-based exam and earn financial support for your academic journey.', images: ['https://loremflickr.com/600/400?lock=100', 'https://loremflickr.com/600/400?lock=101', 'https://loremflickr.com/600/400?lock=102', 'https://loremflickr.com/600/400?lock=103'] },
        { id: 802, title: 'Winter Clothes Drive', year_count: 15, start_date: '2026-01-25', end_date: '2026-02-08', location: 'City Square', description: 'Warm hearts in winter! Donate winter clothing and blankets to those in need. Our 15-year drive has helped thousands stay warm during harsh winters. Every contribution directly reaches vulnerable populations.', images: ['https://loremflickr.com/600/400?lock=104', 'https://loremflickr.com/600/400?lock=105', 'https://loremflickr.com/600/400?lock=106'] },
        { id: 803, title: 'Library Setup', year_count: 2, start_date: '2026-06-01', end_date: '2026-06-15', location: 'Village Library', description: 'Open doors to knowledge! Help us establish and stocked village libraries offering free access to books and learning resources. Be part of spreading education and literacy in underserved communities.', images: ['https://loremflickr.com/600/400?lock=107', 'https://loremflickr.com/600/400?lock=108', 'https://loremflickr.com/600/400?lock=109', 'https://loremflickr.com/600/400?lock=110'] },
        { id: 804, title: 'Skill Training', year_count: 3, start_date: '2026-09-05', end_date: '2026-09-18', location: 'Training Center', description: 'Build a better future! Our vocational skill training programs teach marketable skills from tailoring to digital marketing. Trainees gain certification and job placement assistance to secure sustainable livelihoods.', images: ['https://loremflickr.com/600/400?lock=111', 'https://loremflickr.com/600/400?lock=112', 'https://loremflickr.com/600/400?lock=113'] }
      ]
    },
    {
      id: 9,
      group_id: 'AGS_9',
      name: 'Adarsh Gram Samiti',
      location: 'Dhamtari, CG',
      since: 2016,
      description: 'Adarsh Gram Samiti focuses on agricultural advancement, environmental conservation, and rural development in village communities.',
      contact_numbers: ['9876890123', '9123456788'],
      admins: [],
      events: [
        { id: 901, title: 'Agri-Tech Seminar', year_count: 4, start_date: '2026-02-01', end_date: '2026-02-06', location: 'Panchayat Bhawan', description: 'Modernize agriculture! Learn about technological advancements in farming including precision agriculture, organic farming, and sustainable practices. Our seminars bring together farmers and experts to boost productivity and sustainability.', images: ['https://loremflickr.com/600/400?lock=114', 'https://loremflickr.com/600/400?lock=115', 'https://loremflickr.com/600/400?lock=116', 'https://loremflickr.com/600/400?lock=117'] },
        { id: 902, title: 'Pond Cleaning', year_count: 8, start_date: '2026-01-28', end_date: '2026-02-05', location: 'Village Pond', description: 'Preserve water resources! Join us in cleaning and maintaining village ponds. This community effort ensures clean water availability for agriculture and daily use, while promoting environmental conservation.', images: ['https://loremflickr.com/600/400?lock=118', 'https://loremflickr.com/600/400?lock=119', 'https://loremflickr.com/600/400?lock=120'] },
        { id: 903, title: 'Village Sports Day', year_count: 12, start_date: '2026-04-14', end_date: '2026-04-24', location: 'School Ground', description: 'Celebrate health through sports! Our annual sports day brings the entire village together for friendly competitions, team events, and celebration of fitness. All ages participate in traditional and modern sports.', images: ['https://loremflickr.com/600/400?lock=121', 'https://loremflickr.com/600/400?lock=122', 'https://loremflickr.com/600/400?lock=123', 'https://loremflickr.com/600/400?lock=124'] },
        { id: 904, title: 'Sanitation Awareness', year_count: 5, start_date: '2026-01-02', end_date: '2026-01-10', location: 'Village Streets', description: 'Health through cleanliness! Our awareness drive educates communities about importance of sanitation and hygiene. We promote waste management, toilet usage, and cleanliness habits for better health.', images: ['https://loremflickr.com/600/400?lock=125', 'https://loremflickr.com/600/400?lock=126', 'https://loremflickr.com/600/400?lock=127'] },
        { id: 905, title: 'Cattle Health Camp', year_count: 3, start_date: '2026-05-20', end_date: '2026-05-30', location: 'Veterinary Hospital', description: 'Healthy livestock = Healthy farmers! Free veterinary services for cattle including vaccinations, health checkups, and treatment. Healthy animals ensure better productivity and farmer prosperity.', images: ['https://loremflickr.com/600/400?lock=128', 'https://loremflickr.com/600/400?lock=129', 'https://loremflickr.com/600/400?lock=130', 'https://loremflickr.com/600/400?lock=131'] }
      ]
    },
    {
      id: 10,
      group_id: 'NNG_10',
      name: 'Nav Nirman Group',
      location: 'Rajnandgaon, CG',
      since: 2022,
      description: 'Nav Nirman Group is a youth-focused organization supporting entrepreneurship, career development, and leadership building.',
      contact_numbers: ['9876901234', '9123456789'],
      admins: [],
      events: [
        { id: 1001, title: 'Entrepreneurship Meet', year_count: 2, start_date: '2026-01-31', end_date: '2026-02-10', location: 'Hotel Grand', description: 'Ignite the entrepreneur within! Meet successful business leaders, investors, and mentors. Learn startup strategies, fundraising tips, and business growth hacks. Perfect for aspiring entrepreneurs and innovators!', images: ['https://loremflickr.com/600/400?lock=132', 'https://loremflickr.com/600/400?lock=133', 'https://loremflickr.com/600/400?lock=134'] },
        { id: 1002, title: 'Career Counselling', year_count: 4, start_date: '2026-05-01', end_date: '2026-05-08', location: 'School Auditorium', description: 'Shape your professional journey! Professional counselors guide students in career planning and decision-making. Explore various career paths, college options, and skill development opportunities.', images: ['https://loremflickr.com/600/400?lock=135', 'https://loremflickr.com/600/400?lock=136', 'https://loremflickr.com/600/400?lock=137', 'https://loremflickr.com/600/400?lock=138'] },
        { id: 1003, title: 'Youth Icon Awards', year_count: 1, start_date: '2026-08-12', end_date: '2026-08-20', location: 'Town Hall', description: 'Recognize youth excellence! Our inaugural awards ceremony celebrates outstanding young leaders making positive changes in society. Be inspired by role models and aspire to greatness!', images: ['https://loremflickr.com/600/400?lock=139', 'https://loremflickr.com/600/400?lock=140', 'https://loremflickr.com/600/400?lock=141'] }
      ]
    },
    {
      id: 11,
      group_id: 'JKT_11',
      name: 'Jan Kalyan Trust',
      location: 'Mahasamund, CG',
      since: 2000,
      description: 'Jan Kalyan Trust is a 26-year-old healthcare and social welfare organization dedicated to improving lives through medical camps and community services.',
      contact_numbers: ['9877012345', '9123456790'],
      admins: [],
      events: [
        { id: 1101, title: 'Eye Surgery Camp', year_count: 22, start_date: '2026-02-01', end_date: '2026-02-15', location: 'District Hospital', description: 'Restore sight, restore hope! Our 22-year free eye surgery camp has restored vision to thousands. Expert ophthalmologists perform cataract and other surgeries. Vision is a right, not a privilege—join us in this noble mission!', images: ['https://loremflickr.com/600/400?lock=142', 'https://loremflickr.com/600/400?lock=143', 'https://loremflickr.com/600/400?lock=144', 'https://loremflickr.com/600/400?lock=145'] },
        { id: 1102, title: 'Women Empowerment Talk', year_count: 5, start_date: '2026-01-28', end_date: '2026-02-05', location: 'Community Hall', description: 'Empower women, empower society! Inspiring talks on women\'s rights, education, health, and professional development. Successful women leaders share their journeys and motivate the next generation.', images: ['https://loremflickr.com/600/400?lock=146', 'https://loremflickr.com/600/400?lock=147', 'https://loremflickr.com/600/400?lock=148'] },
        { id: 1103, title: 'Cycle Marathon', year_count: 3, start_date: '2026-06-05', end_date: '2026-06-12', location: 'Main Road', description: 'Pedal for a cause! Our cycle marathon promotes fitness, environmental awareness, and community bonding. Join families and friends for a healthy ride through the city streets.', images: ['https://loremflickr.com/600/400?lock=149', 'https://loremflickr.com/600/400?lock=150', 'https://loremflickr.com/600/400?lock=151', 'https://loremflickr.com/600/400?lock=152'] },
        { id: 1104, title: 'Legal Aid Workshop', year_count: 2, start_date: '2026-07-15', end_date: '2026-07-22', location: 'Law College', description: 'Know your rights! Free legal workshops educate people about constitutional rights, consumer laws, and justice processes. Empower yourself with legal knowledge and access to justice.', images: ['https://loremflickr.com/600/400?lock=153', 'https://loremflickr.com/600/400?lock=154', 'https://loremflickr.com/600/400?lock=155'] },
        { id: 1105, title: 'Organic Farming Intro', year_count: 4, start_date: '2026-01-25', end_date: '2026-02-04', location: 'Farm House', description: 'Farm chemical-free! Learn organic farming techniques that boost soil health and eliminate harmful pesticides. Discover how to produce nutritious food while protecting the environment.', images: ['https://loremflickr.com/600/400?lock=156', 'https://loremflickr.com/600/400?lock=157', 'https://loremflickr.com/600/400?lock=158', 'https://loremflickr.com/600/400?lock=159'] },
        { id: 1106, title: 'Blood Group Testing', year_count: 8, start_date: '2026-01-30', end_date: '2026-02-08', location: 'Red Cross', description: 'Know your blood group, save lives! Free blood group testing camps help people understand their blood type and contribute to blood banks. Essential for emergencies and medical situations.', images: ['https://loremflickr.com/600/400?lock=160', 'https://loremflickr.com/600/400?lock=161', 'https://loremflickr.com/600/400?lock=162'] },
        { id: 1107, title: 'Evening School Support', year_count: 10, start_date: '2026-01-20', end_date: '2026-02-04', location: 'Local School', description: 'Education for all, even after sunset! Our 10-year evening school program supports working children and adults in completing their education. Quality learning with flexible schedules for everyone.', images: ['https://loremflickr.com/600/400?lock=163', 'https://loremflickr.com/600/400?lock=164', 'https://loremflickr.com/600/400?lock=165', 'https://loremflickr.com/600/400?lock=166'] }
      ]
    },
    {
      id: 12,
      group_id: 'NSM_12',
      name: 'Naya Savera Mandal',
      location: 'Kanker, CG',
      since: 2024,
      description: 'Naya Savera Mandal is a newly established community organization committed to bringing positive change through social initiatives and community development programs.',
      contact_numbers: ['9876012345', '9123456791'],
      admins: [],
      events: []
    }
  ];

module.exports = data;
