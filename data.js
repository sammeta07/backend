  samitiGroups: GroupDetailsModel[] = [
    {
      "id": 1,
      "groupId": "ANM_1",
      "title": "Azad Navyuvak Mandal",
      "locationCords": { "lat": 21.2310, "long": 81.4508 },  // ~150m from user
      "area": "Kumhari",
      "since": 2018,
      "description": "Azad Navyuvak Mandal is a vibrant youth organization based in Raipur, Chhattisgarh. Founded in 2018, the group has quickly become a hub for young people passionate about community service, cultural activities, and social change. With a focus on empowering youth and fostering a sense of unity, Azad Navyuvak Mandal organizes a wide range of events throughout the year, including festivals, charity drives, educational workshops, and sports tournaments. The group is known for its inclusive and energetic approach, attracting members from diverse backgrounds who share a common goal of making a positive impact in their community.",
      "contactNumbers": ["9876543210", "9123456780"],
      "logo": "https://picsum.photos/seed/anm-logo/200/200",
      "favourite": true,
      "admins": [],
      "events": [
        {
          "id": 101,
          "title": "Ganesh Utsav 2026",
          "type" : EventType.SPORTS,
          "year_count": 5,
          "start_date": "2026-03-19",
          "end_date": "2026-12-31",
          "locationCords": { "lat": 21.2312, "long": 81.4510 },  // ~180m from group
          "photos": [
            "https://picsum.photos/seed/ganesh-utsav/800/500",
            "https://picsum.photos/seed/ganesh-utsav-2/800/500"
          ],
          "programs": [
            { "id": 101001, 'description' : "Start the day with divine blessings as devotees gather at dawn for the sacred Prabhat Aarati, filling the air with hymns and incense.", "title": "Prabhat Aarati", "type": ProgramType.SPIRITUAL, "date": "2026-04-10", "from_time": "07:00", "to_time": "21:00", "photos": ["https://picsum.photos/seed/program-101001-1/800/500", "https://picsum.photos/seed/program-101001-2/800/500"], "locationCords": { "lat": 21.2312, "long": 81.4510 } },
            { "id": 101002, 'description' : "Witness the sacred installation ceremony of Lord Ganesha's idol, accompanied by Vedic chants and a purifying hawan ritual.", "title": "Sthapana Hawan", "type": ProgramType.SPIRITUAL, "date": "2026-03-19", "from_time": "07:00", "to_time": "21:30", "photos": ["https://picsum.photos/seed/program-101002-1/800/500", "https://picsum.photos/seed/program-101002-2/800/500"], "locationCords": { "lat": 21.2313, "long": 81.4511 } },
            { "id": 101003, 'description' : "An engaging session for children to learn about values, culture, and the teachings of Lord Ganesha through stories and activities.", "title": "Bal Sanskar Sabha", "type": ProgramType.BHANDARA, "date": "2026-03-19", "from_time": "07:00", "to_time": "21:00", "photos": ["https://picsum.photos/seed/program-101003-1/800/500", "https://picsum.photos/seed/program-101003-2/800/500"], "locationCords": { "lat": 21.2311, "long": 81.4509 } },
            { "id": 101004, 'description' : "Women from the community come together for a soul-stirring evening of devotional bhajans and kirtan in honor of Lord Ganesha.", "title": "Mahila Bhajan Sandhya", "type": ProgramType.CULTURAL, "date": "2026-03-19", "from_time": "07:30", "to_time": "21:00", "photos": ["https://picsum.photos/seed/program-101004-1/800/500", "https://picsum.photos/seed/program-101004-2/800/500"], "locationCords": { "lat": 21.2312, "long": 81.4511 } },
            { "id": 101005, 'description' : "A grand community feast distributing blessed prasad to all devotees, symbolizing unity and divine grace of Lord Ganesha.", "title": "Mahaprasad Vitran", "type": ProgramType.BHANDARA, "date": "2026-02-09", "from_time": "07:23", "to_time": "21:30", "photos": ["https://picsum.photos/seed/program-101005-1/800/500", "https://picsum.photos/seed/program-101005-2/800/500"], "locationCords": { "lat": 21.2313, "long": 81.4510 } },
            { "id": 101006, 'description' : "The grand procession for the immersion of Lord Ganesha's idol, featuring music, dance, and heartfelt farewells from the entire community.", "title": "Ganesh Visarjan Yatra", "type": ProgramType.SPIRITUAL, "date": "2026-02-24", "from_time": "21:30", "to_time": "20:30", "photos": ["https://picsum.photos/seed/program-101006-1/800/500", "https://picsum.photos/seed/program-101006-2/800/500"], "locationCords": { "lat": 21.2311, "long": 81.4510 } }
          ],
          "description": "Celebrate the vibrant festival of Ganesh Utsav with us! Join us for 10 days of cultural performances, community feasts, and spiritual activities as we honor Lord Ganesha. The event will feature traditional music and dance, delicious food stalls, and a grand procession on the final day. Don't miss this opportunity to experience the rich cultural heritage of Raipur and connect with fellow community members in a joyous celebration!"
        },
        {
          "id": 102,
          "title": "Blood Donation Camp",
          "type" : EventType.OTHER,
          "year_count": 2,
          "start_date": "2026-03-12",
          "end_date": "2026-03-14",
          "locationCords": { "lat": 21.2308, "long": 81.4506 },  // ~120m from group
          "photos": [
            "https://picsum.photos/seed/blood-donation/800/500",
            "https://picsum.photos/seed/blood-donation-2/800/500"
          ],
          "programs": [
            { "id": 102001, 'description' : "The camp begins with a short prayer ceremony to seek blessings for the health of all donors and recipients of donated blood.", "title": "Shubh Aarambh Aarati", "type": ProgramType.SPIRITUAL, "date": "2026-03-13", "from_time": "08:00", "to_time": "08:30", "photos": ["https://picsum.photos/seed/program-102001-1/800/500", "https://picsum.photos/seed/program-102001-2/800/500"], "locationCords": { "lat": 21.2308, "long": 81.4506 } },
            { "id": 102002, 'description' : "A continuous health desk staffed by medical professionals providing consultations, blood pressure checks, and health tips throughout the day.", "title": "Health Desk", "type": ProgramType.BHANDARA, "date": "2026-03-14", "from_time": "00:00", "to_time": "23:59", "photos": ["https://picsum.photos/seed/program-102002-1/800/500", "https://picsum.photos/seed/program-102002-2/800/500"], "locationCords": { "lat": 21.2309, "long": 81.4507 } },
            { "id": 102003, 'description' : "A nutritious meal provided to all blood donors as post-donation care, prepared lovingly by community volunteers to aid recovery.", "title": "Seva Bhandara", "type": ProgramType.BHANDARA, "date": "2026-03-16", "from_time": "12:00", "to_time": "14:00", "photos": ["https://picsum.photos/seed/program-102003-1/800/500", "https://picsum.photos/seed/program-102003-2/800/500"], "locationCords": { "lat": 21.2307, "long": 81.4505 } },
            { "id": 102004, 'description' : "An evening prayer to thank the divine for inspiring so many community members to donate blood and save precious lives.", "title": "Evening Aarati", "type": ProgramType.SPIRITUAL, "date": "2026-03-13", "from_time": "18:00", "to_time": "18:45", "photos": ["https://picsum.photos/seed/program-102004-1/800/500", "https://picsum.photos/seed/program-102004-2/800/500"], "locationCords": { "lat": 21.2308, "long": 81.4507 } },
            { "id": 102005, 'description' : "The closing ceremony of the camp with a hawan to bless all donors and pray for the speedy recovery of those in need.", "title": "Samapan Hawan", "type": ProgramType.SPIRITUAL, "date": "2026-03-14", "from_time": "16:00", "to_time": "17:30", "photos": ["https://picsum.photos/seed/program-102005-1/800/500", "https://picsum.photos/seed/program-102005-2/800/500"], "locationCords": { "lat": 21.2309, "long": 81.4506 } }
          ],
          "description": "Save lives by donating blood! Our community blood donation camp provides a safe and hygienic environment for blood donors. Every donation can save up to three lives. Medical professionals will conduct health checks, and all donors will receive refreshments and certificates of appreciation. Join us in this noble cause!"
        },
        {
          "id": 103,
          "title": "Cricket League",
          "type" : EventType.SPORTS,
          "year_count": 10,
          "start_date": "2026-02-01",
          "end_date": "2026-02-12",
          "locationCords": { "lat": 21.2311, "long": 81.4512 },  // ~150m from group
          "photos": [
            "https://picsum.photos/seed/cricket-league/800/500",
            "https://picsum.photos/seed/cricket-league-2/800/500"
          ],
          "programs": [
            { "id": 103001, 'description' : "The cricket league kicks off with an exciting opening ceremony featuring team introductions, flag hoisting, and a march-past by all players.", "title": "Opening Ceremony", "type": ProgramType.SPIRITUAL, "date": "2026-02-01", "from_time": "09:00", "to_time": "10:00", "photos": ["https://picsum.photos/seed/program-103001-1/800/500", "https://picsum.photos/seed/program-103001-2/800/500"], "locationCords": { "lat": 21.2311, "long": 81.4512 } },
            { "id": 103002, 'description' : "A sacred hawan where all team captains take a pledge of sportsmanship and fair play before the tournament officially begins.", "title": "Team Pledge Hawan", "type": ProgramType.SPIRITUAL, "date": "2026-02-01", "from_time": "10:30", "to_time": "11:15", "photos": ["https://picsum.photos/seed/program-103002-1/800/500", "https://picsum.photos/seed/program-103002-2/800/500"], "locationCords": { "lat": 21.2312, "long": 81.4513 } },
            { "id": 103003, 'description' : "A mid-tournament community feast for all players, coaches, and volunteers to recharge and build camaraderie during the league.", "title": "Players Bhandara", "type": ProgramType.BHANDARA, "date": "2026-02-06", "from_time": "14:00", "to_time": "15:30", "photos": ["https://picsum.photos/seed/program-103003-1/800/500", "https://picsum.photos/seed/program-103003-2/800/500"], "locationCords": { "lat": 21.2310, "long": 81.4511 } },
            { "id": 103004, 'description' : "An exclusive meet-and-greet session where fans interact with their favorite players, followed by distribution of prasad and snacks.", "title": "Fan Meet Prasad", "type": ProgramType.BHANDARA, "date": "2026-02-10", "from_time": "17:00", "to_time": "18:00", "photos": ["https://picsum.photos/seed/program-103004-1/800/500", "https://picsum.photos/seed/program-103004-2/800/500"], "locationCords": { "lat": 21.2311, "long": 81.4513 } },
            { "id": 103005, 'description' : "The grand finale featuring the championship match, trophy presentation, and a ceremonial visarjan to conclude the 12-day tournament.", "title": "Final Award Visarjan", "type": ProgramType.SPIRITUAL, "date": "2026-02-12", "from_time": "18:00", "to_time": "20:00", "photos": ["https://picsum.photos/seed/program-103005-1/800/500", "https://picsum.photos/seed/program-103005-2/800/500"], "locationCords": { "lat": 21.2312, "long": 81.4512 } }
          ],
          "description": "Experience thrilling cricket action in our annual league tournament! Teams from across the city will compete in this exciting 12-day event featuring matches, skill demonstrations, and awards for outstanding performances. Whether you're a player or a spectator, this is the ultimate cricket celebration!"
        }
      ]
    },
    {
      "id": 2,
      "groupId": "ESB_2",
      "title": "Ekta Samiti Bhilai",
      "locationCords": { "lat": 21.2345, "long": 81.4520 },  // ~550m from user
      "area": "Charoda",
      "since": 2010,
      "description": "Ekta Samiti Bhilai promotes community harmony and organizes cultural events that bring people together in celebration and solidarity.",
      "contactNumbers": ["9876123456", "9123456781"],
      "logo": "https://picsum.photos/seed/esb-logo/200/200",
      "favourite": false,
      "admins": [],
      "events": [
        {
          "id": 201,
          "title": "Durga Puja 2025",
          "type" : EventType.PUJA,
          "year_count": 51,
          "start_date": "2026-03-12",
          "end_date": "2026-03-15",
          "locationCords": { "lat": 21.2347, "long": 81.4522 },  // ~160m from group
          "photos": [
            "https://picsum.photos/seed/durga-puja/800/500",
            "https://picsum.photos/seed/durga-puja-2/800/500"
          ],
          "programs": [
            { "id": 201001, 'description' : "The festival begins with the auspicious Kalash Sthapana ritual, invoking Goddess Durga's divine presence and seeking her blessings for all devotees.", "title": "Kalash Sthapana", "type": ProgramType.SPIRITUAL, "date": "2026-03-12", "from_time": "06:30", "to_time": "08:00", "photos": ["https://picsum.photos/seed/program-201001-1/800/500", "https://picsum.photos/seed/program-201001-2/800/500"], "locationCords": { "lat": 21.2347, "long": 81.4522 } },
            { "id": 201002, 'description' : "Young girls are worshipped as manifestations of Goddess Durga in this deeply touching ceremony that celebrates feminine divinity.", "title": "Kumari Pujan", "type": ProgramType.SPIRITUAL, "date": "2026-03-12", "from_time": "10:00", "to_time": "11:30", "photos": ["https://picsum.photos/seed/program-201002-1/800/500", "https://picsum.photos/seed/program-201002-2/800/500"], "locationCords": { "lat": 21.2348, "long": 81.4523 } },
            { "id": 201003, 'description' : "A grand community feast open to all, serving traditional festive food as a symbol of equality and divine generosity during Durga Puja.", "title": "Maha Bhandara", "type": ProgramType.BHANDARA, "date": "2026-03-16", "from_time": "11:00", "to_time": "19:00", "photos": ["https://picsum.photos/seed/program-201003-1/800/500", "https://picsum.photos/seed/program-201003-2/800/500"], "locationCords": { "lat": 21.2346, "long": 81.4521 } },
            { "id": 201004, 'description' : "The mesmerizing evening aarati with lamps, bells, and devotional songs creates a deeply spiritual atmosphere for all devotees.", "title": "Sandhya Aarati", "type": ProgramType.SPIRITUAL, "date": "2026-03-16", "from_time": "14:00", "to_time": "20:00", "photos": ["https://picsum.photos/seed/program-201004-1/800/500", "https://picsum.photos/seed/program-201004-2/800/500"], "locationCords": { "lat": 21.2347, "long": 81.4523 } },
            { "id": 201005, 'description' : "The grand farewell procession for Goddess Durga, with thousands joining the colorful parade through the streets to the immersion site.", "title": "Visarjan Shobha Yatra", "type": ProgramType.CRICKET, "date": "2026-03-15", "from_time": "16:00", "to_time": "20:00", "photos": ["https://picsum.photos/seed/program-201005-1/800/500", "https://picsum.photos/seed/program-201005-2/800/500"], "locationCords": { "lat": 21.2348, "long": 81.4522 } }
          ],
          "description": "Join us for the most revered festival celebration! This 51-year-old tradition brings together thousands of devotees for cultural performances, traditional feasts, and spiritual ceremonies to honor Goddess Durga. Experience intricate decorations, elaborate pujas, and community bonding at its finest!"
        },
        {
          "id": 202,
          "title": "Garba Night",
          "year_count": 5,
          "type": EventType.PUJA,
          "start_date": "2025-12-15",
          "end_date": "2025-12-25",
          "locationCords": { "lat": 21.2343, "long": 81.4518 },  // ~140m from group
          "photos": [
            "https://picsum.photos/seed/garba-night/800/500",
            "https://picsum.photos/seed/garba-night-2/800/500"
          ],
          "programs": [
            { "id": 202001, 'description' : "The Garba celebration begins with a divine aarati to invoke Goddess Amba's blessings before the colorful dance festivities commence.", "title": "Garba Opening Aarati", "type": ProgramType.SPIRITUAL, "date": "2025-12-15", "from_time": "18:30", "to_time": "19:00", "photos": ["https://picsum.photos/seed/program-202001-1/800/500", "https://picsum.photos/seed/program-202001-2/800/500"], "locationCords": { "lat": 21.2343, "long": 81.4518 } },
            { "id": 202002, 'description' : "An interactive workshop for beginners to learn the art of Dandiya Raas, led by experienced dance instructors in a festive atmosphere.", "title": "Dandiya Workshop", "type": ProgramType.CULTURAL, "date": "2025-12-15", "from_time": "19:15", "to_time": "20:15", "photos": ["https://picsum.photos/seed/program-202002-1/800/500", "https://picsum.photos/seed/program-202002-2/800/500"], "locationCords": { "lat": 21.2344, "long": 81.4519 } },
            { "id": 202003, 'description' : "Sweet prasad is distributed to all participants as a symbol of Goddess Amba's blessings during the joyful festive celebration.", "title": "Community Prasad Vitran", "type": ProgramType.BHANDARA, "date": "2025-12-20", "from_time": "21:00", "to_time": "22:00", "photos": ["https://picsum.photos/seed/program-202003-1/800/500", "https://picsum.photos/seed/program-202003-2/800/500"], "locationCords": { "lat": 21.2342, "long": 81.4517 } },
            { "id": 202004, 'description' : "Young dancers take center stage in an energetic Garba round, showcasing their vibrant attire and gracefully synchronized movements.", "title": "Youth Garba Round", "type": ProgramType.CULTURAL, "date": "2025-12-22", "from_time": "20:00", "to_time": "21:30", "photos": ["https://picsum.photos/seed/program-202004-1/800/500", "https://picsum.photos/seed/program-202004-2/800/500"], "locationCords": { "lat": 21.2343, "long": 81.4519 } },
            { "id": 202005, 'description' : "The festival concludes with a grand feast celebrating the spirit of togetherness and community bonding, sending everyone home with a full heart.", "title": "Grand Finale Bhandara", "type": ProgramType.BHANDARA, "date": "2025-12-25", "from_time": "20:30", "to_time": "22:30", "photos": ["https://picsum.photos/seed/program-202005-1/800/500", "https://picsum.photos/seed/program-202005-2/800/500"], "locationCords": { "lat": 21.2344, "long": 81.4518 } }
          ],
          "description": "Dance into the festive season with our vibrant Garba Night! This traditional circular dance celebrates the joy of togetherness. Come dressed in colorful attire to participate in group dances, enjoy music, and connect with the community in a fun and energetic atmosphere!"
        }
      ]
    },
    {
      "id": 3,
      "groupId": "NSM_3",
      "title": "Navjivan Samaj Mandal",
      "locationCords": { "lat": 21.2420, "long": 81.4580 },  // ~1.5km from user
      "area": "Bhilai 3",
      "since": 2015,
      "description": "Navjivan Samaj Mandal works towards social welfare and youth empowerment through various educational and cultural programs.",
      "contactNumbers": ["9876543211", "9123456782"],
      "logo": "https://picsum.photos/seed/nsm-logo/200/200",
      "favourite": true,
      "admins": [],
      "events": [
        {
          "id": 301,
          "title": "Holi Celebration",
          "year_count": 8,
          "type" : EventType.FESTIVAL,
          "start_date": "2026-03-20",
          "end_date": "2026-03-21",
          "locationCords": { "lat": 21.2422, "long": 81.4578 },  // ~180m from group
          "photos": [
            "https://picsum.photos/seed/holi/800/500",
            "https://picsum.photos/seed/holi-2/800/500"
          ],
          "programs": [
            { "id": 301001, 'description' : "The Holi celebration begins with a spiritual aarati and community prayers, setting a joyful and auspicious tone for the festival of colors.", "title": "Holi Milan Aarati", "type": ProgramType.SPIRITUAL, "date": "2026-03-20", "from_time": "09:00", "to_time": "09:45", "photos": ["https://picsum.photos/seed/program-301001-1/800/500", "https://picsum.photos/seed/program-301001-2/800/500"], "locationCords": { "lat": 21.2422, "long": 81.4578 } },
            { "id": 301002, 'description' : "A festive community meal featuring traditional Holi delicacies like gujiya, thandai, and puranpoli, shared with everyone in attendance.", "title": "Rangotsav Bhandara", "type": ProgramType.BHANDARA, "date": "2026-03-20", "from_time": "13:00", "to_time": "15:00", "photos": ["https://picsum.photos/seed/program-301002-1/800/500", "https://picsum.photos/seed/program-301002-2/800/500"], "locationCords": { "lat": 21.2423, "long": 81.4579 } },
            { "id": 301003, 'description' : "Local artists perform traditional Chhattisgarhi folk dances, bringing the rich and vibrant cultural heritage of the region to life.", "title": "Folk Dance Program", "type": ProgramType.CULTURAL, "date": "2026-03-20", "from_time": "13:00", "to_time": "15:00", "photos": ["https://picsum.photos/seed/program-301003-1/800/500", "https://picsum.photos/seed/program-301003-2/800/500"], "locationCords": { "lat": 21.2421, "long": 81.4577 } },
            { "id": 301004, 'description' : "A purifying hawan ceremony as the sun sets on Holi day, symbolizing the timeless victory of good over evil and light over darkness.", "title": "Evening Hawan", "type": ProgramType.SPIRITUAL, "date": "2026-03-20", "from_time": "18:30", "to_time": "19:30", "photos": ["https://picsum.photos/seed/program-301004-1/800/500", "https://picsum.photos/seed/program-301004-2/800/500"], "locationCords": { "lat": 21.2422, "long": 81.4579 } }
          ],
          "description": "Celebrate the festival of colors with our grand Holi event! Join us for music, dance, and colorful fun as we welcome spring with joy and enthusiasm."
        },
        {
          "id": 302,
          "title": "Youth Sports Meet",
          "type" : EventType.SPORTS,
          "year_count": 3,
          "start_date": "2026-04-10",
          "end_date": "2026-04-15",
          "locationCords": { "lat": 21.2418, "long": 81.4582 },  // ~150m from group
          "photos": [
            "https://picsum.photos/seed/sports/800/500",
            "https://picsum.photos/seed/sports-2/800/500"
          ],
          "programs": [
            { "id": 302001, 'description' : "The sports meet begins with an inspiring torch rally through the streets, symbolizing the Olympic spirit and the boundless energy of youth.", "title": "Torch Rally", "type": ProgramType.OTHER, "date": "2026-04-10", "from_time": "08:00", "to_time": "09:00", "photos": ["https://picsum.photos/seed/program-302001-1/800/500", "https://picsum.photos/seed/program-302001-2/800/500"], "locationCords": { "lat": 21.2418, "long": 81.4582 } },
            { "id": 302002, 'description' : "A sacred hawan ceremony to seek blessings for all athletes, praying for their safety and best performance throughout the sports event.", "title": "Opening Hawan", "type": ProgramType.SPIRITUAL, "date": "2026-04-10", "from_time": "09:30", "to_time": "10:15", "photos": ["https://picsum.photos/seed/program-302002-1/800/500", "https://picsum.photos/seed/program-302002-2/800/500"], "locationCords": { "lat": 21.2419, "long": 81.4583 } },
            { "id": 302003, 'description' : "A specially curated nutritious meal for all athletes to maintain energy and stamina during the mid-tournament phase of the sports meet.", "title": "Athlete Nutrition Prasad", "type": ProgramType.BHANDARA, "date": "2026-04-12", "from_time": "12:30", "to_time": "13:30", "photos": ["https://picsum.photos/seed/program-302003-1/800/500", "https://picsum.photos/seed/program-302003-2/800/500"], "locationCords": { "lat": 21.2417, "long": 81.4581 } },
            { "id": 302004, 'description' : "Experienced athletes and coaches share insights on sports psychology, career in sports, and valuable life skills with young participants.", "title": "Mentor Talk", "type": ProgramType.CULTURAL, "date": "2026-04-14", "from_time": "17:00", "to_time": "18:00", "photos": ["https://picsum.photos/seed/program-302004-1/800/500", "https://picsum.photos/seed/program-302004-2/800/500"], "locationCords": { "lat": 21.2418, "long": 81.4583 } },
            { "id": 302005, 'description' : "The sports meet concludes with trophy distribution, felicitation of outstanding performers, and a closing prayer for all participants.", "title": "Closing Ceremony", "type": ProgramType.SPIRITUAL, "date": "2026-04-15", "from_time": "18:00", "to_time": "19:30", "photos": ["https://picsum.photos/seed/program-302005-1/800/500", "https://picsum.photos/seed/program-302005-2/800/500"], "locationCords": { "lat": 21.2419, "long": 81.4582 } }
          ],
          "description": "Annual sports meet featuring various competitions including cricket, volleyball, badminton, and athletics for youth from across the city."
        }
      ]
    },
    {
      "id": 4,
      "groupId": "RSYC_4",
      "title": "Rising Star Youth Club",
      "locationCords": { "lat": 21.2510, "long": 81.4620 },  // ~2.8km from user
      "area": "Jamul",
      "since": 2021,
      "description": "Rising Star Youth Club nurtures young talent through sports, education, and personality development programs.",
      "contactNumbers": ["9876456789", "9123456784"],
      "logo": "https://picsum.photos/seed/rsyc-logo/200/200",
      "favourite": false,
      "admins": [],
      "events": [
        {
          "id": 401,
          "title": "Dance Competition",
          "type" : EventType.SPORTS,
          "year_count": 4,
          "start_date": "2026-05-15",
          "end_date": "2026-05-25",
          "locationCords": { "lat": 21.2512, "long": 81.4618 },  // ~170m from group
          "photos": [
            "https://picsum.photos/seed/dance-competition/800/500",
            "https://picsum.photos/seed/dance-competition-2/800/500"
          ],
          "programs": [
            { "id": 401001, 'description' : "The stage is consecrated with a poojan ceremony, invoking the blessings of Goddess Saraswati for all the aspiring performers taking part.", "title": "Stage Poojan", "type": ProgramType.SPIRITUAL, "date": "2026-05-15", "from_time": "10:00", "to_time": "11:00", "photos": ["https://picsum.photos/seed/program-401001-1/800/500", "https://picsum.photos/seed/program-401001-2/800/500"], "locationCords": { "lat": 21.2512, "long": 81.4618 } },
            { "id": 401002, 'description' : "Young dancers aged 8-14 showcase their talent in various classical and folk dance forms in this exciting junior category showcase round.", "title": "Junior Category Round", "type": ProgramType.CULTURAL, "date": "2026-05-15", "from_time": "16:00", "to_time": "18:00", "photos": ["https://picsum.photos/seed/program-401002-1/800/500", "https://picsum.photos/seed/program-401002-2/800/500"], "locationCords": { "lat": 21.2513, "long": 81.4619 } },
            { "id": 401003, 'description' : "A community meal served to all audience members and participants, ensuring everyone feels welcomed, nourished, and celebrated at the event.", "title": "Audience Bhandara", "type": ProgramType.BHANDARA, "date": "2026-05-20", "from_time": "14:00", "to_time": "15:30", "photos": ["https://picsum.photos/seed/program-401003-1/800/500", "https://picsum.photos/seed/program-401003-2/800/500"], "locationCords": { "lat": 21.2511, "long": 81.4617 } },
            { "id": 401004, 'description' : "The best performers from earlier rounds compete in the spectacular semi-finals, raising the artistic bar and delighting the audience.", "title": "Semi Final Showcase", "type": ProgramType.CULTURAL, "date": "2026-05-23", "from_time": "18:30", "to_time": "20:00", "photos": ["https://picsum.photos/seed/program-401004-1/800/500", "https://picsum.photos/seed/program-401004-2/800/500"], "locationCords": { "lat": 21.2512, "long": 81.4619 } },
            { "id": 401005, 'description' : "The champions are felicitated with trophies and certificates, followed by a celebratory puja and distribution of prasad to all performers.", "title": "Winner Celebration", "type": ProgramType.SPIRITUAL, "date": "2026-05-25", "from_time": "19:00", "to_time": "21:00", "photos": ["https://picsum.photos/seed/program-401005-1/800/500", "https://picsum.photos/seed/program-401005-2/800/500"], "locationCords": { "lat": 21.2513, "long": 81.4618 } }
          ],
          "description": "Showcase your dance talent in our inter-city dance competition featuring various styles from classical to contemporary!"
        }
      ]
    },
    {
      "id": 5,
      "groupId": "USM_5",
      "title": "Unity Seva Mandal",
      "locationCords": { "lat": 21.2640, "long": 81.4710 },  // ~4.5km from user
      "area": "Ahiwara",
      "since": 2012,
      "description": "Unity Seva Mandal is dedicated to community service, organizing health camps, educational programs, and social welfare activities.",
      "contactNumbers": ["9876789012", "9123456785"],
      "logo": "https://picsum.photos/seed/usm-logo/200/200",
      "favourite": true,
      "admins": [],
      "events": [
        {
          "id": 501,
          "title": "Free Health Camp",
          "type" : EventType.OTHER,
          "year_count": 11,
          "start_date": "2026-06-01",
          "end_date": "2026-06-05",
          "locationCords": { "lat": 21.2638, "long": 81.4708 },  // ~140m from group
          "photos": [
            "https://picsum.photos/seed/health-camp/800/500",
            "https://picsum.photos/seed/health-camp-2/800/500"
          ],
          "programs": [
            { "id": 501001, 'description' : "The health camp opens with a prayer for good health and wellness, encouraging community members to take proactive charge of their well-being.", "title": "Health Sankalp Aarati", "type": ProgramType.SPIRITUAL, "date": "2026-06-01", "from_time": "08:30", "to_time": "09:00", "photos": ["https://picsum.photos/seed/program-501001-1/800/500", "https://picsum.photos/seed/program-501001-2/800/500"], "locationCords": { "lat": 21.2638, "long": 81.4708 } },
            { "id": 501002, 'description' : "Expert doctors deliver engaging talks on preventive healthcare, nutrition, and common lifestyle diseases to educate and empower the community.", "title": "Health Talk Session", "type": ProgramType.CULTURAL, "date": "2026-06-01", "from_time": "10:00", "to_time": "11:00", "photos": ["https://picsum.photos/seed/program-501002-1/800/500", "https://picsum.photos/seed/program-501002-2/800/500"], "locationCords": { "lat": 21.2639, "long": 81.4709 } },
            { "id": 501003, 'description' : "A nutritious meal provided to patients and caregivers attending the health camp, prepared with hygiene and care by community volunteers.", "title": "Patient Meal Bhandara", "type": ProgramType.BHANDARA, "date": "2026-06-03", "from_time": "13:00", "to_time": "14:30", "photos": ["https://picsum.photos/seed/program-501003-1/800/500", "https://picsum.photos/seed/program-501003-2/800/500"], "locationCords": { "lat": 21.2637, "long": 81.4707 } },
            { "id": 501004, 'description' : "An open forum where residents can ask health-related questions directly to specialists, fostering awareness and preventive healthcare habits.", "title": "Doctor Q&A Camp", "type": ProgramType.CULTURAL, "date": "2026-06-04", "from_time": "16:00", "to_time": "17:00", "photos": ["https://picsum.photos/seed/program-501004-1/800/500", "https://picsum.photos/seed/program-501004-2/800/500"], "locationCords": { "lat": 21.2638, "long": 81.4709 } },
            { "id": 501005, 'description' : "The camp concludes with a hawan ceremony praying for the health, longevity, and prosperity of all community members and their families.", "title": "Samapan Hawan", "type": ProgramType.SPIRITUAL, "date": "2026-06-05", "from_time": "17:00", "to_time": "18:00", "photos": ["https://picsum.photos/seed/program-501005-1/800/500", "https://picsum.photos/seed/program-501005-2/800/500"], "locationCords": { "lat": 21.2639, "long": 81.4708 } }
          ],
          "description": "Free health checkup camp providing medical consultations, blood tests, and health awareness sessions for the community."
        },
        {
          "id": 502,
          "title": "Educational Workshop",
          "type" : EventType.OTHER,
          "year_count": 6,
          "start_date": "2026-07-10",
          "end_date": "2026-07-12",
          "locationCords": { "lat": 21.2642, "long": 81.4712 },  // ~160m from group
          "photos": [
            "https://picsum.photos/seed/workshop/800/500",
            "https://picsum.photos/seed/workshop-2/800/500"
          ],
          "programs": [
            { "id": 502001, 'description' : "The educational workshop is inaugurated with an aarati, seeking blessings of wisdom and learning for all participants and facilitators.", "title": "Workshop Inaugural Aarati", "type": ProgramType.SPIRITUAL, "date": "2026-07-10", "from_time": "09:30", "to_time": "10:00", "photos": ["https://picsum.photos/seed/program-502001-1/800/500", "https://picsum.photos/seed/program-502001-2/800/500"], "locationCords": { "lat": 21.2642, "long": 81.4712 } },
            { "id": 502002, 'description' : "Hands-on skill development activities covering digital literacy, communication skills, and vocational training for the participating youth.", "title": "Skill Lab Session", "type": ProgramType.CULTURAL, "date": "2026-07-10", "from_time": "11:00", "to_time": "12:30", "photos": ["https://picsum.photos/seed/program-502002-1/800/500", "https://picsum.photos/seed/program-502002-2/800/500"], "locationCords": { "lat": 21.2643, "long": 81.4713 } },
            { "id": 502006, 'description' : "A warm and hearty meal for all volunteers who have dedicated their time and effort to making this educational workshop a success.", "title": "Volunteer Bhandara", "type": ProgramType.BHANDARA, "date": "2026-07-10", "from_time": "11:00", "to_time": "12:30", "photos": ["https://picsum.photos/seed/program-502006-1/800/500", "https://picsum.photos/seed/program-502006-2/800/500"], "locationCords": { "lat": 21.2641, "long": 81.4711 } },
            { "id": 502003, 'description' : "Blessed prasad is distributed to all students as a token of encouragement and divine blessings for their continued academic journey.", "title": "Student Prasad Vitran", "type": ProgramType.BHANDARA, "date": "2026-07-11", "from_time": "12:30", "to_time": "13:30", "photos": ["https://picsum.photos/seed/program-502003-1/800/500", "https://picsum.photos/seed/program-502003-2/800/500"], "locationCords": { "lat": 21.2642, "long": 81.4713 } },
            { "id": 502004, 'description' : "Industry experts and career counselors guide students on education pathways, scholarship opportunities, and smart career planning choices.", "title": "Career Guidance Panel", "type": ProgramType.CULTURAL, "date": "2026-07-11", "from_time": "15:00", "to_time": "16:00", "photos": ["https://picsum.photos/seed/program-502004-1/800/500", "https://picsum.photos/seed/program-502004-2/800/500"], "locationCords": { "lat": 21.2643, "long": 81.4712 } },
            { "id": 502005, 'description' : "The workshop concludes with a heartfelt closing ceremony honoring students, mentors, and volunteers for their remarkable contributions.", "title": "Closing Visarjan Program", "type": ProgramType.SPIRITUAL, "date": "2026-07-12", "from_time": "17:30", "to_time": "18:30", "photos": ["https://picsum.photos/seed/program-502005-1/800/500", "https://picsum.photos/seed/program-502005-2/800/500"], "locationCords": { "lat": 21.2641, "long": 81.4712 } }
          ],
          "description": "Educational workshop for students covering career guidance, personality development, and skill enhancement programs."
        }
      ]
    },
    {
      "id": 10,
      "groupId": "VNC_10",
      "title": "Very Nearby Club",
      "locationCords": { "lat": 21.2301, "long": 81.4501 },  // ~120m from user (very close)
      "area": "Kumhari",
      "since": 2025,
      "description": "A community club located very close to you, perfect for quick meetups and local events.",
      "contactNumbers": ["9000000000"],
      "logo": "https://picsum.photos/seed/nearby-test/200/200",
      "favourite": false,
      "admins": [],
      "events": [
        {
          "id": 1001,
          "title": "Weekend Meetup",
          "type" : EventType.OTHER,
          "year_count": 1,
          "start_date": "2026-03-12",
          "end_date": "2026-03-13",
          "locationCords": { "lat": 21.2301, "long": 81.4501 },  // Same as group location
          "photos": ["https://picsum.photos/seed/test-event/800/500"],
          "programs": [
            { "id": 1001001, 'description' : "The weekend meetup begins with a peaceful morning aarati, connecting neighborhood members through shared spiritual practice and community prayer.", "title": "Morning Aarati", "type": ProgramType.SPIRITUAL, "date": "2026-03-16", "from_time": "07:00", "to_time": "08:00", "photos": ["https://picsum.photos/seed/program-1001001-1/800/500", "https://picsum.photos/seed/program-1001001-2/800/500"], "locationCords": { "lat": 21.2301, "long": 81.4501 } },
            { "id": 1001002, 'description' : "A day-long open bhandara welcoming all neighborhood residents to enjoy home-cooked meals, exchange ideas, and strengthen community bonds.", "title": "Community Bhandara", "type": ProgramType.BHANDARA, "date": "2026-03-12", "from_time": "00:00", "to_time": "23:59", "photos": ["https://picsum.photos/seed/program-1001002-1/800/500", "https://picsum.photos/seed/program-1001002-2/800/500"], "locationCords": { "lat": 21.2302, "long": 81.4502 } }
          ],
          "description": "Casual weekend meetup for community members to connect, share ideas, and plan future activities together."
        }
      ]
    },
    {
      "id": 11,
      "groupId": "DSS_11",
      "title": "Bemetera Seva Sangh",
      "locationCords": { "lat": 21.6480, "long": 81.4500 },
      "area": "Bemetara",
      "since": 2016,
      "description": "Durg Seva Sangh is a long-running community organization known for devotional gatherings, public service programs, and large-scale annual celebrations that attract members from across the district.",
      "contactNumbers": ["9876500011", "9123400011"],
      "logo": "https://picsum.photos/seed/dss-logo/200/200",
      "favourite": false,
      "admins": [],
      "events": [
        {
          "id": 1101,
          "title": "Sharad Mahotsav",
          "type": EventType.FESTIVAL,
          "year_count": 14,
          "start_date": "2026-10-18",
          "end_date": "2026-10-20",
          "locationCords": { "lat": 21.6482, "long": 81.4503 },
          "photos": [
            "https://picsum.photos/seed/sharad-mahotsav/800/500",
            "https://picsum.photos/seed/sharad-mahotsav-2/800/500"
          ],
          "programs": [
            { "id": 1101001, "description": "The mahotsav opens with a ceremonial deep prajwalan and evening aarati, bringing together families and elders in a peaceful devotional atmosphere.", "title": "Deep Prajwalan Aarati", "type": ProgramType.SPIRITUAL, "date": "2026-10-18", "from_time": "18:00", "to_time": "19:00", "photos": ["https://picsum.photos/seed/program-1101001-1/800/500", "https://picsum.photos/seed/program-1101001-2/800/500"], "locationCords": { "lat": 21.6482, "long": 81.4503 } },
            { "id": 1101002, "description": "Local artists perform folk songs, dance, and stage acts celebrating regional culture and community traditions.", "title": "Lok Sanskritik Sandhya", "type": ProgramType.CULTURAL, "date": "2026-10-19", "from_time": "19:30", "to_time": "21:30", "photos": ["https://picsum.photos/seed/program-1101002-1/800/500", "https://picsum.photos/seed/program-1101002-2/800/500"], "locationCords": { "lat": 21.6481, "long": 81.4504 } },
            { "id": 1101003, "description": "A large community meal is served to attendees and volunteers as a mark of gratitude and collective celebration.", "title": "Samuhik Bhandara", "type": ProgramType.BHANDARA, "date": "2026-10-20", "from_time": "12:00", "to_time": "14:30", "photos": ["https://picsum.photos/seed/program-1101003-1/800/500", "https://picsum.photos/seed/program-1101003-2/800/500"], "locationCords": { "lat": 21.6483, "long": 81.4502 } }
          ],
          "description": "Sharad Mahotsav is a three-day celebration featuring devotional programs, cultural performances, and community dining for families across the region."
        }
      ]
    }
    
  ];

module.exports = data;
