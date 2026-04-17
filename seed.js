require('dotenv').config();
const mysql = require('mysql2/promise');

const groups = [
  {
    group_id: 'ANM_1', name: 'Azad Navyuvak Mandal', area: 'Kumhari', since: 2018,
    description: 'Azad Navyuvak Mandal is a vibrant youth organization based in Raipur, Chhattisgarh. Founded in 2018, the group has quickly become a hub for young people passionate about community service, cultural activities, and social change.',
    location_cords: { lat: 21.2310, long: 81.4508 },
    contact_numbers: ['9876543210', '9123456780'],
    logo: 'https://picsum.photos/seed/anm-logo/200/200',
    events: [
      {
        title: 'Ganesh Utsav 2026', type: 'SPORTS', year_count: 5,
        start_date: '2026-03-19', end_date: '2026-12-31',
        location_cords: { lat: 21.2312, long: 81.4510 },
        photos: ['https://picsum.photos/seed/ganesh-utsav/800/500', 'https://picsum.photos/seed/ganesh-utsav-2/800/500'],
        description: "Celebrate the vibrant festival of Ganesh Utsav with us! Join us for 10 days of cultural performances, community feasts, and spiritual activities.",
        programs: [
          { title: 'Prabhat Aarati', type: 'SPIRITUAL', date: '2026-04-10', from_time: '07:00', to_time: '21:00', description: 'Start the day with divine blessings as devotees gather at dawn for the sacred Prabhat Aarati.', photos: ['https://picsum.photos/seed/program-101001-1/800/500'], location_cords: { lat: 21.2312, long: 81.4510 } },
          { title: 'Sthapana Hawan', type: 'SPIRITUAL', date: '2026-03-19', from_time: '07:00', to_time: '21:30', description: 'Witness the sacred installation ceremony of Lord Ganesha\'s idol, accompanied by Vedic chants.', photos: ['https://picsum.photos/seed/program-101002-1/800/500'], location_cords: { lat: 21.2313, long: 81.4511 } },
          { title: 'Bal Sanskar Sabha', type: 'BHANDARA', date: '2026-03-19', from_time: '07:00', to_time: '21:00', description: 'An engaging session for children to learn about values, culture, and the teachings of Lord Ganesha.', photos: ['https://picsum.photos/seed/program-101003-1/800/500'], location_cords: { lat: 21.2311, long: 81.4509 } },
          { title: 'Mahila Bhajan Sandhya', type: 'CULTURAL', date: '2026-03-19', from_time: '07:30', to_time: '21:00', description: 'Women from the community come together for a soul-stirring evening of devotional bhajans.', photos: ['https://picsum.photos/seed/program-101004-1/800/500'], location_cords: { lat: 21.2312, long: 81.4511 } },
          { title: 'Mahaprasad Vitran', type: 'BHANDARA', date: '2026-02-09', from_time: '07:23', to_time: '21:30', description: 'A grand community feast distributing blessed prasad to all devotees.', photos: ['https://picsum.photos/seed/program-101005-1/800/500'], location_cords: { lat: 21.2313, long: 81.4510 } },
          { title: 'Ganesh Visarjan Yatra', type: 'SPIRITUAL', date: '2026-02-24', from_time: '21:30', to_time: '20:30', description: 'The grand procession for the immersion of Lord Ganesha\'s idol.', photos: ['https://picsum.photos/seed/program-101006-1/800/500'], location_cords: { lat: 21.2311, long: 81.4510 } }
        ]
      },
      {
        title: 'Blood Donation Camp', type: 'OTHER', year_count: 2,
        start_date: '2026-03-12', end_date: '2026-03-14',
        location_cords: { lat: 21.2308, long: 81.4506 },
        photos: ['https://picsum.photos/seed/blood-donation/800/500', 'https://picsum.photos/seed/blood-donation-2/800/500'],
        description: 'Save lives by donating blood! Our community blood donation camp provides a safe and hygienic environment for blood donors.',
        programs: [
          { title: 'Shubh Aarambh Aarati', type: 'SPIRITUAL', date: '2026-03-13', from_time: '08:00', to_time: '08:30', description: 'The camp begins with a short prayer ceremony.', photos: ['https://picsum.photos/seed/program-102001-1/800/500'], location_cords: { lat: 21.2308, long: 81.4506 } },
          { title: 'Health Desk', type: 'BHANDARA', date: '2026-03-14', from_time: '00:00', to_time: '23:59', description: 'A continuous health desk staffed by medical professionals.', photos: ['https://picsum.photos/seed/program-102002-1/800/500'], location_cords: { lat: 21.2309, long: 81.4507 } },
          { title: 'Seva Bhandara', type: 'BHANDARA', date: '2026-03-16', from_time: '12:00', to_time: '14:00', description: 'A nutritious meal provided to all blood donors.', photos: ['https://picsum.photos/seed/program-102003-1/800/500'], location_cords: { lat: 21.2307, long: 81.4505 } },
          { title: 'Evening Aarati', type: 'SPIRITUAL', date: '2026-03-13', from_time: '18:00', to_time: '18:45', description: 'An evening prayer to thank the divine.', photos: ['https://picsum.photos/seed/program-102004-1/800/500'], location_cords: { lat: 21.2308, long: 81.4507 } },
          { title: 'Samapan Hawan', type: 'SPIRITUAL', date: '2026-03-14', from_time: '16:00', to_time: '17:30', description: 'The closing ceremony of the camp with a hawan.', photos: ['https://picsum.photos/seed/program-102005-1/800/500'], location_cords: { lat: 21.2309, long: 81.4506 } }
        ]
      },
      {
        title: 'Cricket League', type: 'SPORTS', year_count: 10,
        start_date: '2026-02-01', end_date: '2026-02-12',
        location_cords: { lat: 21.2311, long: 81.4512 },
        photos: ['https://picsum.photos/seed/cricket-league/800/500', 'https://picsum.photos/seed/cricket-league-2/800/500'],
        description: 'Experience thrilling cricket action in our annual league tournament!',
        programs: [
          { title: 'Opening Ceremony', type: 'SPIRITUAL', date: '2026-02-01', from_time: '09:00', to_time: '10:00', description: 'The cricket league kicks off with an exciting opening ceremony.', photos: ['https://picsum.photos/seed/program-103001-1/800/500'], location_cords: { lat: 21.2311, long: 81.4512 } },
          { title: 'Team Pledge Hawan', type: 'SPIRITUAL', date: '2026-02-01', from_time: '10:30', to_time: '11:15', description: 'A sacred hawan where all team captains take a pledge of sportsmanship.', photos: ['https://picsum.photos/seed/program-103002-1/800/500'], location_cords: { lat: 21.2312, long: 81.4513 } },
          { title: 'Players Bhandara', type: 'BHANDARA', date: '2026-02-06', from_time: '14:00', to_time: '15:30', description: 'A mid-tournament community feast for all players.', photos: ['https://picsum.photos/seed/program-103003-1/800/500'], location_cords: { lat: 21.2310, long: 81.4511 } },
          { title: 'Fan Meet Prasad', type: 'BHANDARA', date: '2026-02-10', from_time: '17:00', to_time: '18:00', description: 'An exclusive meet-and-greet session.', photos: ['https://picsum.photos/seed/program-103004-1/800/500'], location_cords: { lat: 21.2311, long: 81.4513 } },
          { title: 'Final Award Visarjan', type: 'SPIRITUAL', date: '2026-02-12', from_time: '18:00', to_time: '20:00', description: 'The grand finale featuring the championship match.', photos: ['https://picsum.photos/seed/program-103005-1/800/500'], location_cords: { lat: 21.2312, long: 81.4512 } }
        ]
      }
    ]
  },
  {
    group_id: 'ESB_2', name: 'Ekta Samiti Bhilai', area: 'Charoda', since: 2010,
    description: 'Ekta Samiti Bhilai promotes community harmony and organizes cultural events that bring people together.',
    location_cords: { lat: 21.2345, long: 81.4520 },
    contact_numbers: ['9876123456', '9123456781'],
    logo: 'https://picsum.photos/seed/esb-logo/200/200',
    events: [
      {
        title: 'Durga Puja 2025', type: 'PUJA', year_count: 51,
        start_date: '2026-03-12', end_date: '2026-03-15',
        location_cords: { lat: 21.2347, long: 81.4522 },
        photos: ['https://picsum.photos/seed/durga-puja/800/500', 'https://picsum.photos/seed/durga-puja-2/800/500'],
        description: 'Join us for the most revered festival celebration!',
        programs: [
          { title: 'Kalash Sthapana', type: 'SPIRITUAL', date: '2026-03-12', from_time: '06:30', to_time: '08:00', description: 'The festival begins with the auspicious Kalash Sthapana ritual.', photos: ['https://picsum.photos/seed/program-201001-1/800/500'], location_cords: { lat: 21.2347, long: 81.4522 } },
          { title: 'Kumari Pujan', type: 'SPIRITUAL', date: '2026-03-12', from_time: '10:00', to_time: '11:30', description: 'Young girls are worshipped as manifestations of Goddess Durga.', photos: ['https://picsum.photos/seed/program-201002-1/800/500'], location_cords: { lat: 21.2348, long: 81.4523 } },
          { title: 'Maha Bhandara', type: 'BHANDARA', date: '2026-03-16', from_time: '11:00', to_time: '19:00', description: 'A grand community feast open to all.', photos: ['https://picsum.photos/seed/program-201003-1/800/500'], location_cords: { lat: 21.2346, long: 81.4521 } },
          { title: 'Sandhya Aarati', type: 'SPIRITUAL', date: '2026-03-16', from_time: '14:00', to_time: '20:00', description: 'The mesmerizing evening aarati with lamps.', photos: ['https://picsum.photos/seed/program-201004-1/800/500'], location_cords: { lat: 21.2347, long: 81.4523 } },
          { title: 'Visarjan Shobha Yatra', type: 'CRICKET', date: '2026-03-15', from_time: '16:00', to_time: '20:00', description: 'The grand farewell procession for Goddess Durga.', photos: ['https://picsum.photos/seed/program-201005-1/800/500'], location_cords: { lat: 21.2348, long: 81.4522 } }
        ]
      },
      {
        title: 'Garba Night', type: 'PUJA', year_count: 5,
        start_date: '2025-12-15', end_date: '2025-12-25',
        location_cords: { lat: 21.2343, long: 81.4518 },
        photos: ['https://picsum.photos/seed/garba-night/800/500', 'https://picsum.photos/seed/garba-night-2/800/500'],
        description: 'Dance into the festive season with our vibrant Garba Night!',
        programs: [
          { title: 'Garba Opening Aarati', type: 'SPIRITUAL', date: '2025-12-15', from_time: '18:30', to_time: '19:00', description: 'The Garba celebration begins with a divine aarati.', photos: ['https://picsum.photos/seed/program-202001-1/800/500'], location_cords: { lat: 21.2343, long: 81.4518 } },
          { title: 'Dandiya Workshop', type: 'CULTURAL', date: '2025-12-15', from_time: '19:15', to_time: '20:15', description: 'An interactive workshop for beginners to learn Dandiya Raas.', photos: ['https://picsum.photos/seed/program-202002-1/800/500'], location_cords: { lat: 21.2344, long: 81.4519 } },
          { title: 'Community Prasad Vitran', type: 'BHANDARA', date: '2025-12-20', from_time: '21:00', to_time: '22:00', description: 'Sweet prasad is distributed to all participants.', photos: ['https://picsum.photos/seed/program-202003-1/800/500'], location_cords: { lat: 21.2342, long: 81.4517 } },
          { title: 'Youth Garba Round', type: 'CULTURAL', date: '2025-12-22', from_time: '20:00', to_time: '21:30', description: 'Young dancers take center stage in an energetic Garba round.', photos: ['https://picsum.photos/seed/program-202004-1/800/500'], location_cords: { lat: 21.2343, long: 81.4519 } },
          { title: 'Grand Finale Bhandara', type: 'BHANDARA', date: '2025-12-25', from_time: '20:30', to_time: '22:30', description: 'The festival concludes with a grand feast.', photos: ['https://picsum.photos/seed/program-202005-1/800/500'], location_cords: { lat: 21.2344, long: 81.4518 } }
        ]
      }
    ]
  },
  {
    group_id: 'NSM_3', name: 'Navjivan Samaj Mandal', area: 'Bhilai 3', since: 2015,
    description: 'Navjivan Samaj Mandal works towards social welfare and youth empowerment through various programs.',
    location_cords: { lat: 21.2420, long: 81.4580 },
    contact_numbers: ['9876543211', '9123456782'],
    logo: 'https://picsum.photos/seed/nsm-logo/200/200',
    events: [
      {
        title: 'Holi Celebration', type: 'FESTIVAL', year_count: 8,
        start_date: '2026-03-20', end_date: '2026-03-21',
        location_cords: { lat: 21.2422, long: 81.4578 },
        photos: ['https://picsum.photos/seed/holi/800/500', 'https://picsum.photos/seed/holi-2/800/500'],
        description: 'Celebrate the festival of colors with our grand Holi event!',
        programs: [
          { title: 'Holi Milan Aarati', type: 'SPIRITUAL', date: '2026-03-20', from_time: '09:00', to_time: '09:45', description: 'The Holi celebration begins with a spiritual aarati.', photos: ['https://picsum.photos/seed/program-301001-1/800/500'], location_cords: { lat: 21.2422, long: 81.4578 } },
          { title: 'Rangotsav Bhandara', type: 'BHANDARA', date: '2026-03-20', from_time: '13:00', to_time: '15:00', description: 'A festive community meal featuring traditional Holi delicacies.', photos: ['https://picsum.photos/seed/program-301002-1/800/500'], location_cords: { lat: 21.2423, long: 81.4579 } },
          { title: 'Folk Dance Program', type: 'CULTURAL', date: '2026-03-20', from_time: '13:00', to_time: '15:00', description: 'Local artists perform traditional Chhattisgarhi folk dances.', photos: ['https://picsum.photos/seed/program-301003-1/800/500'], location_cords: { lat: 21.2421, long: 81.4577 } },
          { title: 'Evening Hawan', type: 'SPIRITUAL', date: '2026-03-20', from_time: '18:30', to_time: '19:30', description: 'A purifying hawan ceremony as the sun sets on Holi day.', photos: ['https://picsum.photos/seed/program-301004-1/800/500'], location_cords: { lat: 21.2422, long: 81.4579 } }
        ]
      },
      {
        title: 'Youth Sports Meet', type: 'SPORTS', year_count: 3,
        start_date: '2026-04-10', end_date: '2026-04-15',
        location_cords: { lat: 21.2418, long: 81.4582 },
        photos: ['https://picsum.photos/seed/sports/800/500', 'https://picsum.photos/seed/sports-2/800/500'],
        description: 'Annual sports meet featuring various competitions for youth.',
        programs: [
          { title: 'Torch Rally', type: 'OTHER', date: '2026-04-10', from_time: '08:00', to_time: '09:00', description: 'The sports meet begins with an inspiring torch rally.', photos: ['https://picsum.photos/seed/program-302001-1/800/500'], location_cords: { lat: 21.2418, long: 81.4582 } },
          { title: 'Opening Hawan', type: 'SPIRITUAL', date: '2026-04-10', from_time: '09:30', to_time: '10:15', description: 'A sacred hawan ceremony to seek blessings for all athletes.', photos: ['https://picsum.photos/seed/program-302002-1/800/500'], location_cords: { lat: 21.2419, long: 81.4583 } },
          { title: 'Athlete Nutrition Prasad', type: 'BHANDARA', date: '2026-04-12', from_time: '12:30', to_time: '13:30', description: 'A specially curated nutritious meal for all athletes.', photos: ['https://picsum.photos/seed/program-302003-1/800/500'], location_cords: { lat: 21.2417, long: 81.4581 } },
          { title: 'Mentor Talk', type: 'CULTURAL', date: '2026-04-14', from_time: '17:00', to_time: '18:00', description: 'Experienced athletes share insights on sports and life skills.', photos: ['https://picsum.photos/seed/program-302004-1/800/500'], location_cords: { lat: 21.2418, long: 81.4583 } },
          { title: 'Closing Ceremony', type: 'SPIRITUAL', date: '2026-04-15', from_time: '18:00', to_time: '19:30', description: 'The sports meet concludes with trophy distribution.', photos: ['https://picsum.photos/seed/program-302005-1/800/500'], location_cords: { lat: 21.2419, long: 81.4582 } }
        ]
      }
    ]
  },
  {
    group_id: 'RSYC_4', name: 'Rising Star Youth Club', area: 'Jamul', since: 2021,
    description: 'Rising Star Youth Club nurtures young talent through sports, education, and personality development programs.',
    location_cords: { lat: 21.2510, long: 81.4620 },
    contact_numbers: ['9876456789', '9123456784'],
    logo: 'https://picsum.photos/seed/rsyc-logo/200/200',
    events: [
      {
        title: 'Dance Competition', type: 'SPORTS', year_count: 4,
        start_date: '2026-05-15', end_date: '2026-05-25',
        location_cords: { lat: 21.2512, long: 81.4618 },
        photos: ['https://picsum.photos/seed/dance-competition/800/500', 'https://picsum.photos/seed/dance-competition-2/800/500'],
        description: 'Showcase your dance talent in our inter-city dance competition!',
        programs: [
          { title: 'Stage Poojan', type: 'SPIRITUAL', date: '2026-05-15', from_time: '10:00', to_time: '11:00', description: 'The stage is consecrated with a poojan ceremony.', photos: ['https://picsum.photos/seed/program-401001-1/800/500'], location_cords: { lat: 21.2512, long: 81.4618 } },
          { title: 'Junior Category Round', type: 'CULTURAL', date: '2026-05-15', from_time: '16:00', to_time: '18:00', description: 'Young dancers aged 8-14 showcase their talent.', photos: ['https://picsum.photos/seed/program-401002-1/800/500'], location_cords: { lat: 21.2513, long: 81.4619 } },
          { title: 'Audience Bhandara', type: 'BHANDARA', date: '2026-05-20', from_time: '14:00', to_time: '15:30', description: 'A community meal served to all audience members and participants.', photos: ['https://picsum.photos/seed/program-401003-1/800/500'], location_cords: { lat: 21.2511, long: 81.4617 } },
          { title: 'Semi Final Showcase', type: 'CULTURAL', date: '2026-05-23', from_time: '18:30', to_time: '20:00', description: 'The best performers compete in the semi-finals.', photos: ['https://picsum.photos/seed/program-401004-1/800/500'], location_cords: { lat: 21.2512, long: 81.4619 } },
          { title: 'Winner Celebration', type: 'SPIRITUAL', date: '2026-05-25', from_time: '19:00', to_time: '21:00', description: 'The champions are felicitated with trophies and certificates.', photos: ['https://picsum.photos/seed/program-401005-1/800/500'], location_cords: { lat: 21.2513, long: 81.4618 } }
        ]
      }
    ]
  },
  {
    group_id: 'USM_5', name: 'Unity Seva Mandal', area: 'Ahiwara', since: 2012,
    description: 'Unity Seva Mandal is dedicated to community service, organizing health camps and educational programs.',
    location_cords: { lat: 21.2640, long: 81.4710 },
    contact_numbers: ['9876789012', '9123456785'],
    logo: 'https://picsum.photos/seed/usm-logo/200/200',
    events: [
      {
        title: 'Free Health Camp', type: 'OTHER', year_count: 11,
        start_date: '2026-06-01', end_date: '2026-06-05',
        location_cords: { lat: 21.2638, long: 81.4708 },
        photos: ['https://picsum.photos/seed/health-camp/800/500', 'https://picsum.photos/seed/health-camp-2/800/500'],
        description: 'Free health checkup camp providing medical consultations and health awareness.',
        programs: [
          { title: 'Health Sankalp Aarati', type: 'SPIRITUAL', date: '2026-06-01', from_time: '08:30', to_time: '09:00', description: 'The health camp opens with a prayer for good health.', photos: ['https://picsum.photos/seed/program-501001-1/800/500'], location_cords: { lat: 21.2638, long: 81.4708 } },
          { title: 'Health Talk Session', type: 'CULTURAL', date: '2026-06-01', from_time: '10:00', to_time: '11:00', description: 'Expert doctors deliver talks on preventive healthcare.', photos: ['https://picsum.photos/seed/program-501002-1/800/500'], location_cords: { lat: 21.2639, long: 81.4709 } },
          { title: 'Patient Meal Bhandara', type: 'BHANDARA', date: '2026-06-03', from_time: '13:00', to_time: '14:30', description: 'A nutritious meal provided to patients and caregivers.', photos: ['https://picsum.photos/seed/program-501003-1/800/500'], location_cords: { lat: 21.2637, long: 81.4707 } },
          { title: 'Doctor Q&A Camp', type: 'CULTURAL', date: '2026-06-04', from_time: '16:00', to_time: '17:00', description: 'An open forum where residents can ask health-related questions.', photos: ['https://picsum.photos/seed/program-501004-1/800/500'], location_cords: { lat: 21.2638, long: 81.4709 } },
          { title: 'Samapan Hawan', type: 'SPIRITUAL', date: '2026-06-05', from_time: '17:00', to_time: '18:00', description: 'The camp concludes with a hawan ceremony.', photos: ['https://picsum.photos/seed/program-501005-1/800/500'], location_cords: { lat: 21.2639, long: 81.4708 } }
        ]
      },
      {
        title: 'Educational Workshop', type: 'OTHER', year_count: 6,
        start_date: '2026-07-10', end_date: '2026-07-12',
        location_cords: { lat: 21.2642, long: 81.4712 },
        photos: ['https://picsum.photos/seed/workshop/800/500', 'https://picsum.photos/seed/workshop-2/800/500'],
        description: 'Educational workshop for students covering career guidance and skill enhancement.',
        programs: [
          { title: 'Workshop Inaugural Aarati', type: 'SPIRITUAL', date: '2026-07-10', from_time: '09:30', to_time: '10:00', description: 'The workshop is inaugurated with an aarati.', photos: ['https://picsum.photos/seed/program-502001-1/800/500'], location_cords: { lat: 21.2642, long: 81.4712 } },
          { title: 'Skill Lab Session', type: 'CULTURAL', date: '2026-07-10', from_time: '11:00', to_time: '12:30', description: 'Hands-on skill development activities.', photos: ['https://picsum.photos/seed/program-502002-1/800/500'], location_cords: { lat: 21.2643, long: 81.4713 } },
          { title: 'Volunteer Bhandara', type: 'BHANDARA', date: '2026-07-10', from_time: '11:00', to_time: '12:30', description: 'A hearty meal for all volunteers.', photos: ['https://picsum.photos/seed/program-502006-1/800/500'], location_cords: { lat: 21.2641, long: 81.4711 } },
          { title: 'Student Prasad Vitran', type: 'BHANDARA', date: '2026-07-11', from_time: '12:30', to_time: '13:30', description: 'Blessed prasad is distributed to all students.', photos: ['https://picsum.photos/seed/program-502003-1/800/500'], location_cords: { lat: 21.2642, long: 81.4713 } },
          { title: 'Career Guidance Panel', type: 'CULTURAL', date: '2026-07-11', from_time: '15:00', to_time: '16:00', description: 'Industry experts guide students on career planning.', photos: ['https://picsum.photos/seed/program-502004-1/800/500'], location_cords: { lat: 21.2643, long: 81.4712 } },
          { title: 'Closing Visarjan Program', type: 'SPIRITUAL', date: '2026-07-12', from_time: '17:30', to_time: '18:30', description: 'The workshop concludes with a closing ceremony.', photos: ['https://picsum.photos/seed/program-502005-1/800/500'], location_cords: { lat: 21.2641, long: 81.4712 } }
        ]
      }
    ]
  },
  {
    group_id: 'VNC_10', name: 'Very Nearby Club', area: 'Kumhari', since: 2025,
    description: 'A community club located very close to you, perfect for quick meetups and local events.',
    location_cords: { lat: 21.2301, long: 81.4501 },
    contact_numbers: ['9000000000'],
    logo: 'https://picsum.photos/seed/nearby-test/200/200',
    events: [
      {
        title: 'Weekend Meetup', type: 'OTHER', year_count: 1,
        start_date: '2026-03-12', end_date: '2026-03-13',
        location_cords: { lat: 21.2301, long: 81.4501 },
        photos: ['https://picsum.photos/seed/test-event/800/500'],
        description: 'Casual weekend meetup for community members.',
        programs: [
          { title: 'Morning Aarati', type: 'SPIRITUAL', date: '2026-03-16', from_time: '07:00', to_time: '08:00', description: 'The weekend meetup begins with a peaceful morning aarati.', photos: ['https://picsum.photos/seed/program-1001001-1/800/500'], location_cords: { lat: 21.2301, long: 81.4501 } },
          { title: 'Community Bhandara', type: 'BHANDARA', date: '2026-03-12', from_time: '00:00', to_time: '23:59', description: 'A day-long open bhandara welcoming all neighborhood residents.', photos: ['https://picsum.photos/seed/program-1001002-1/800/500'], location_cords: { lat: 21.2302, long: 81.4502 } }
        ]
      }
    ]
  },
  {
    group_id: 'DSS_11', name: 'Bemetera Seva Sangh', area: 'Bemetara', since: 2016,
    description: 'Durg Seva Sangh is a long-running community organization known for devotional gatherings and public service programs.',
    location_cords: { lat: 21.6480, long: 81.4500 },
    contact_numbers: ['9876500011', '9123400011'],
    logo: 'https://picsum.photos/seed/dss-logo/200/200',
    events: [
      {
        title: 'Sharad Mahotsav', type: 'FESTIVAL', year_count: 14,
        start_date: '2026-10-18', end_date: '2026-10-20',
        location_cords: { lat: 21.6482, long: 81.4503 },
        photos: ['https://picsum.photos/seed/sharad-mahotsav/800/500', 'https://picsum.photos/seed/sharad-mahotsav-2/800/500'],
        description: 'Sharad Mahotsav is a three-day celebration featuring devotional programs and cultural performances.',
        programs: [
          { title: 'Deep Prajwalan Aarati', type: 'SPIRITUAL', date: '2026-10-18', from_time: '18:00', to_time: '19:00', description: 'The mahotsav opens with a ceremonial deep prajwalan.', photos: ['https://picsum.photos/seed/program-1101001-1/800/500'], location_cords: { lat: 21.6482, long: 81.4503 } },
          { title: 'Lok Sanskritik Sandhya', type: 'CULTURAL', date: '2026-10-19', from_time: '19:30', to_time: '21:30', description: 'Local artists perform folk songs and dance.', photos: ['https://picsum.photos/seed/program-1101002-1/800/500'], location_cords: { lat: 21.6481, long: 81.4504 } },
          { title: 'Samuhik Bhandara', type: 'BHANDARA', date: '2026-10-20', from_time: '12:00', to_time: '14:30', description: 'A large community meal is served to attendees.', photos: ['https://picsum.photos/seed/program-1101003-1/800/500'], location_cords: { lat: 21.6483, long: 81.4502 } }
        ]
      }
    ]
  }
];

async function seed() {
  const conn = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    ssl: { rejectUnauthorized: false }
  });

  // Clear existing data (order matters due to FKs)
  await conn.query('DELETE FROM programs');
  await conn.query('DELETE FROM user_event_roles');
  await conn.query('DELETE FROM events');
  await conn.query('DELETE FROM user_group_roles');
  await conn.query('DELETE FROM `groups`');
  console.log('Cleared existing data');

  let totalGroups = 0, totalEvents = 0, totalPrograms = 0;

  for (const group of groups) {
    const [gResult] = await conn.query(
      'INSERT INTO `groups` (group_id, name, since, description, area, location_cords, contact_numbers, logo, admins) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [group.group_id, group.name, group.since, group.description, group.area,
       JSON.stringify(group.location_cords), JSON.stringify(group.contact_numbers),
       group.logo, JSON.stringify([])]
    );
    const groupId = gResult.insertId;
    totalGroups++;
    console.log(`  Group: ${group.name} (id: ${groupId})`);

    for (const event of group.events) {
      const [eResult] = await conn.query(
        'INSERT INTO events (group_id, title, type, year_count, start_date, end_date, description, location_cords, photos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [groupId, event.title, event.type, event.year_count, event.start_date, event.end_date,
         event.description, JSON.stringify(event.location_cords), JSON.stringify(event.photos)]
      );
      const eventId = eResult.insertId;
      totalEvents++;
      console.log(`    Event: ${event.title} (id: ${eventId})`);

      for (const program of event.programs) {
        await conn.query(
          'INSERT INTO programs (event_id, title, type, description, date, from_time, to_time, location_cords, photos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [eventId, program.title, program.type, program.description, program.date,
           program.from_time, program.to_time, JSON.stringify(program.location_cords), JSON.stringify(program.photos)]
        );
        totalPrograms++;
      }
      console.log(`      Programs: ${event.programs.length}`);
    }
  }

  console.log(`\nSeed complete: ${totalGroups} groups, ${totalEvents} events, ${totalPrograms} programs`);
  await conn.end();
}

seed().catch(err => { console.error('Seed failed:', err); process.exit(1); });
