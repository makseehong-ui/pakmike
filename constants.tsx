
import { Service, Project, Product, LocationBranch } from './types';

export const PHONE_NUMBER = "0175162938";

export const SERVICES: Service[] = [
  { 
    id: '1', 
    name: 'CCTV Systems', 
    icon: 'videocam', 
    description: 'Advanced surveillance solutions.', 
    category: 'security',
    heroImageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
    longDescription: 'Protect your property with Pakmike\'s cutting-edge surveillance technology. We specialize in high-definition IP camera systems that offer crystal clear monitoring regardless of lighting conditions. Our solutions range from small residential setups to massive industrial multi-node networks.',
    gallery: [
      { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-security-camera-looking-at-a-car-park-42718-large.mp4', poster: 'https://images.unsplash.com/photo-1551808198-b3236ee24351?auto=format&fit=crop&q=80&w=600' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1521110612774-7096e1875e5d?auto=format&fit=crop&q=80&w=600' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80&w=600' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=600' }
    ],
    features: [
      { title: '4K Resolution', desc: 'Ultra-high definition clarity for facial and license plate recognition.', icon: 'high_res' },
      { title: 'AI Analytics', desc: 'Smart detection for human and vehicle intrusion alerts.', icon: 'psychology' },
      { title: 'Mobile Link', desc: 'View live streams and recordings anywhere in the world via app.', icon: 'vibration' },
      { title: 'ColorVu Tech', desc: 'Full-color imaging even in total darkness for superior night safety.', icon: 'palette' }
    ],
    benefits: [
      '24/7 Peace of mind with constant recording',
      'Insurance premium reductions for secured properties',
      'Remote site management for business owners',
      'High-durability hardware rated for IP67 weatherproof use'
    ],
    relatedProjectId: 'p5',
    faq: [
      { question: 'Can I view the footage on my phone?', answer: 'Yes, all our CCTV systems come with a free mobile app that allows you to view live feeds and playback recordings from anywhere with an internet connection.' },
      { question: 'How many days of recording can the system store?', answer: 'This depends on the hard drive capacity and number of cameras. Typically, our standard setups provide 14 to 30 days of continuous recording.' },
      { question: 'Do the cameras work in total darkness?', answer: 'Absolutely. We use ColorVu or Infrared technology to ensure high-quality visibility even in 0 lux conditions.' }
    ]
  },
  { 
    id: '2', 
    name: 'Electrical Wiring', 
    icon: 'electric_bolt', 
    description: 'Expert engineering for all scales.', 
    category: 'electrical',
    heroImageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    longDescription: 'Reliable power is the backbone of every modern building. Our electrical engineering team provides comprehensive wiring solutions that strictly adhere to Malaysian safety standards. Whether it is a new building project or a complete rewiring of an aging structure, we ensure maximum efficiency and safety.',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=600' }
    ],
    features: [
      { title: 'Phase Balancing', desc: 'Ensuring even power distribution to prevent circuit overloads.', icon: 'balance' },
      { title: 'Safety Audits', desc: 'Full thermal scanning to detect hidden wiring faults.', icon: 'security_update_good' },
      { title: 'Industrial Grade', desc: 'Heavy duty DB and trunking for high-demand environments.', icon: 'factory' },
      { title: 'Smart Panel', desc: 'Energy monitoring systems to track and reduce power consumption.', icon: 'query_stats' }
    ],
    benefits: [
      'Strict adherence to Suruhanjaya Tenaga regulations',
      'Minimization of fire hazards through quality materials',
      'Optimized power usage leading to lower utility bills',
      'Certified testing and commissioning reports provided'
    ],
    relatedProjectId: 'p2',
    faq: [
      { question: 'Do you provide ST certification?', answer: 'Yes, all our major installations include testing and commissioning reports that comply with Suruhanjaya Tenaga (ST) regulations.' },
      { question: 'How often should I rewire my home?', answer: 'Generally, electrical systems should be inspected every 10 years. If your building is over 25 years old, a full rewiring is often recommended for safety.' },
      { question: 'Can you help with power tripping issues?', answer: 'Yes, we offer emergency troubleshooting to identify and fix short circuits or overloading issues causing frequent trips.' }
    ]
  },
  { 
    id: '3', 
    name: 'Maintenance', 
    icon: 'build', 
    description: 'Technical repair services.', 
    category: 'maintenance',
    heroImageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    longDescription: 'Preventive maintenance is key to equipment longevity. Our maintenance packages ensure your security and electrical systems remain in peak condition. We provide scheduled inspections, software updates, and emergency repair services to minimize downtime and prevent costly replacements.',
    gallery: [
      { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-technician-performing-maintenance-on-a-solar-panel-array-41584-large.mp4', poster: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800' }
    ],
    features: [
      { title: 'Periodic Audits', desc: 'Quarterly checks of all hardware and software components.', icon: 'calendar_month' },
      { title: 'Storage Health', desc: 'Verification of NVR/DVR hard drive integrity and backups.', icon: 'storage' },
      { title: 'Cleaning Service', desc: 'Precision lens cleaning and dust removal from electrical panels.', icon: 'cleaning_services' },
      { title: 'Firmware Updates', desc: 'Applying latest security patches to networked devices.', icon: 'system_update' }
    ],
    benefits: [
      'Extended lifespan for expensive hardware',
      'Priority emergency support for maintenance clients',
      'Reduced risk of system failure at critical moments',
      'Consistent performance optimization'
    ],
    faq: [
      { question: 'What does a maintenance visit include?', answer: 'We perform a full system diagnostic, hardware cleaning (lenses/panels), storage health checks, and firmware updates.' },
      { question: 'Do you offer emergency 24/7 support?', answer: 'Priority emergency support is available for clients on our annual maintenance contracts.' },
      { question: 'Can you maintain systems installed by others?', answer: 'Yes, we can perform a system audit and take over the maintenance of existing security or electrical installations.' }
    ]
  },
  { 
    id: '4', 
    name: 'Smart Solutions', 
    icon: 'home_iot_device', 
    description: 'Home automation systems.', 
    category: 'smart',
    heroImageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    longDescription: 'Step into the future with Pakmike Smart Solutions. We integrate your lights, security, and climate control into a single unified interface. Control your entire home or office through voice commands or your smartphone, creating environments that respond to your presence and schedule.',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800' }
    ],
    features: [
      { title: 'Voice Integration', desc: 'Compatibility with Google Home and Alexa voice commands.', icon: 'record_voice_over' },
      { title: 'Auto Lighting', desc: 'Presence-based lighting to save energy and improve safety.', icon: 'light' },
      { title: 'Smart Locks', desc: 'Keyless entry with log tracking for improved access control.', icon: 'lock' },
      { title: 'Scene Setup', desc: 'One-tap atmosphere changes for work, rest, or security.', icon: 'settings_input_component' }
    ],
    benefits: [
      'Unmatched convenience in daily operations',
      'Significant energy savings through automated off-timers',
      'Increased property value and modern appeal',
      'Enhanced security through simulated occupancy'
    ],
    relatedProjectId: 'p3',
    faq: [
      { question: 'Do I need high-speed internet for a smart home?', answer: 'A stable Wi-Fi connection is required for remote access and voice control. We can also provide networking solutions to ensure full coverage.' },
      { question: 'Is it hard to use for elderly family members?', answer: 'Not at all. We design simple voice commands and physical "smart buttons" so everyone can use the system easily.' },
      { question: 'What happens if the internet goes down?', answer: 'Basic functions like lighting and smart locks will still work via local Bluetooth or physical overrides.' }
    ]
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p5',
    title: 'Recently Completed Project',
    location: 'Lunas, Kulim',
    category: 'CCTV & AI Analytics',
    description: 'Our latest high-definition surveillance installation at a major commercial site. This project features edge-based AI analytics, including human and vehicle detection, virtual tripwires, and 4K monitoring across all critical zones to ensure maximum security and operational oversight.',
    imageUrl: '/projects/caltex-recent/uploaded_image_0_1769165019394.jpg',
    gallery: [
      '/projects/caltex-recent/uploaded_image_0_1769165019394.jpg',
      '/projects/caltex-recent/uploaded_image_1_1769165019394.jpg',
      '/projects/caltex-recent/uploaded_image_2_1769165019394.jpg',
      '/projects/caltex-recent/uploaded_image_3_1769165019394.jpg',
      '/projects/caltex-recent/uploaded_image_4_1769165019394.jpg'
    ],
    date: '14/01/2026',
    certified: true
  },
  {
    id: 'p4',
    title: 'Caltex Station AI Surveillance Upgrade',
    location: 'Lunas, Kulim',
    category: 'CCTV & AI Analytics',
    description: 'A comprehensive security overhaul for a Caltex petrol station. We implemented a 4K IP surveillance network with edge-based AI analytics. The system features real-time human and vehicle detection, virtual tripwires for perimeter protection, and high-fidelity monitoring of all fueling points and retail zones.',
    imageUrl: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1621240398683-1e9674681619?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800'
    ],
    date: '22/01/2026',
    certified: true
  },
  {
    id: 'p1',
    title: 'Industrial Warehouse Surveillance',
    location: 'Bayan Lepas, Penang',
    category: 'CCTV & Network',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIyWImzvCWDE1DFQCv6pfbnBflf6gDValo2odh0kt2IGa3euWgzT1BRYlDShi7F3CoAPpRC4Xls4xM0Qpi1tJy24sxhHwxxzE7d8tSKMX8iCaR_eQXaei9X3WQz_gHvKLMOjgfKZPcfPxjxOMDSVN5n6i3UxVmHNTFyD0XgZy2FMkQzYNCRwKMOkLwL1rXMfIhDYA0jzq3cN6URF1dR-Kolo1l_J1sf6TkyLWXtkdXJ0GYXD-AGIp7UhAEBybhVRH9zYRTcnsRBUei',
    date: 'Jan 2024',
    certified: true
  },
  {
    id: 'p2',
    title: 'Corporate Office Power Grid',
    location: 'George Town, Penang',
    category: 'Electrical Wiring',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfOuTqCTzrsIIdDqR2Wn3-Ey0esL41DWCKPeHgY5Qt8tDYSZYaendR2zanAG445jFRqtR31h6Nq0jT7Z715DY8ZAoMvVoLf9ZeD5YYaKqKHlSej8d_lgvmkQy_PJyag1iJl2ZAKi8X4rzaq1Ktyjdk45zpfMbX-BpteLPMCkarYb2avahefz6QkubkcqhbatslSNXmjVnWwh58CF_Lfwj8ntSnRNwdUZ6XVOaEbF520-arsMnoEHRc9ITF7MKzBl1yrdaYIEx4a3Ya',
    date: 'June 2023'
  },
  {
    id: 'p3',
    title: 'Residential Smart Monitoring',
    location: 'Bukit Mertajam, Penang',
    category: 'Smart Security',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_vtsNm-4y4v_W2rsJTLPA0brIy12ToJOPKGR6F01QkHe2va0v0A82yfatLv1Fla4gK_GQVzfHuJ2wkVs1xnHXIbgrtsCCftPzfLxqlm7JeTyOlH-dEu5lg8f3OK6ei3G5MzbFbpeJSAqx4wzRRSeSxMJLmz6a7eJbtipaaWUCZi5LIEHDLZJAKub1d9ljMEUlwNaMW0v9XrCipKlPx62YFK_A2MQzyYz60v2xvCItzXgNBkb5AH9IidkCFQ_ADBRmOLBzF9PAxO6I',
    date: 'Dec 2023',
    certified: true
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod1',
    brand: 'Hikvision',
    name: 'ColorVu Turret 4MP',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzX5z_HuHohT4CSmyqTQMQ1ncD6_U4ZdCVxsX9yPWPambPHu-JCi0tatZKc2Y_exDyjWj4PBU5T2uO08RsYEJIcEL5WZJJeiTH0Qt_Cij-QY55_P3QWM01_VAPCmh6VoNmG0tXzpHEf4b7KvvZST520bb-a_UsKAI4MSOoaB9USjK9gdyrWnwLNtZNcADfWaKpIqaN6BICsDRG0_5F7ddAVRulmKhRBLgtpm1kpcZ0vXfw7BqYE5WDUolrIGsf7sEZIIrNW_Y6gUln',
    specs: ['30m Color Vision', '4MP / 2K Res'],
    tag: 'ColorVu'
  },
  {
    id: 'prod2',
    brand: 'Dahua',
    name: '5MP WizSense PTZ',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4uvCw9QFam7Fo57WJ5wlWK5WjAXZ6PKCYukr1TA6zYBZaXNMLgFtJttQGTxKeVM5LCFgkLS8V2C9oWNRE7fDIJSzYlullEkhTu9vqigIeJ-2JfKArToRhsFtMZl2Mj8ephGXHdXaZ_TNstHfjcIdldtGQjy4YuJYNyRA6tKkhyOj9gDqcjpqZS9Lmu1pK9H0zLquJKSF981jHfzrQe0g3ARYuQoBvWEQK-hhE3i0q01-yPpSannE_bb5-yDPpr2RCl7kIEG50xTk8',
    specs: ['Active Deterrence', '3x Optical Zoom'],
    tag: 'TiOC 2.0',
    tagColor: '#e21a2c'
  },
  {
    id: 'prod3',
    brand: 'Hikvision',
    name: '8MP AI Bullet',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQaoCjTM385KGoqPsbXxjCJVSfwxI3kraxy9eK3I7G4Blpw7CN7THuzUzelbiykSesNPwCuM9OY1pF1jwJeIydnuovmtlIg5bumKdx7PsS2eBnYclwiDnxdNL153sjyrLX1CtE8IW9P92hGY5wPL65uN6sWbGQfuB-XBnrXOy7wW0Jg9fLLtlPfFKOkuiKl1Y16yC5sUDAj_VsghqX3GBw7C5Hu0RxJpNTsEBdhXTcX7EXGmh19GD45wsGSgBJXjN-b7m0c3PXuBzj',
    specs: ['Person/Vehicle AI', 'IP67 Weatherproof'],
    tag: 'AcuSense'
  },
  {
    id: 'prod4',
    brand: 'Dahua',
    name: '4MP Smart Dual Dome',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM19ZLgyp5ARkEWijX35z9LGW_GbNxJEn0AWU4G2F_VZaPIQ0wXVdEqyZH7zNMVoX68hTd7x4Fw6h3hmOovIoTgoByqVNLnee1_BOHah8QhafSKkCtU3Z3go7KsFnJkHm6bt7KSpuUCMcMq5cFkHQ2K9lHXmw982hOkJ_0LQy024RFGG__pn1ZLxIyh6tbA6HbVihgAGx2_mo_RabyH9A13tpDwF2yZckm9UxxA8eU1_W-rOBqUa5tVCQvbaKE_SRt0L_cKpM0tvNQ',
    specs: ['Smart Dual Light', 'Built-in Mic'],
    tag: 'WizSense',
    tagColor: '#e21a2c'
  }
];

export const BRANCHES: LocationBranch[] = [
  {
    id: 'b1',
    name: 'George Town Center',
    address: 'Jalan Zainul Abidin, George Town, 10400 George Town, Pulau Pinang',
    mapImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChEpo5BS6P87kvljOucepkaHPLhgh0g35mqMb1HsO9GA0DS2R18t5Y6yNA1tK7-Mu2Vrn8w3yVCQbAfUhsXSiDvzX2BaUc0THXCdA9JkMRlZi_5N15PWBXxUuYaYTJqo_M9bMuNe_BoRVKt3jl_yobrwMo7Uy8iKAnm9ccHp9ezCBjHyiO2KLvFqEdBessHERwrS-UTYuEtScdMHx2lX4N_0CYKqc1nmYE_eD1dhNOjwp5xwaPcTGRQcEUVejcThOG0kez5D_rRauU'
  },
  {
    id: 'b2',
    name: 'Butterworth Center',
    address: 'Jalan Perai Jaya 6, Butterworth, 13700 Perai, Pulau Pinang',
    mapImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCzcJyJWg09gmUk_LCI4Qw_ZIyE-lzEtZetigQ5D75zvSlbPJdcSVF4P-c4gKnWWzdBYZXcCEPC-IclaLxE8wxBkuVoxLNdMe43-jVUyut5IPM_hh3jGqoV8X8mBS4Fr-Cr4WaY2nYVaV1HltCCsmpd_MmUvaPsqxsJE6ej6ln_82-i7T60JVmASY5t4P0HoBPCopZpi4n2ad7GFpjVpujlJV_yAxPQbmmf-xpNCt6gD7WqJONSidVctxHGZ-2eK33TK6MnkPpsh88'
  },
  {
    id: 'b3',
    name: 'Bukit Mertajam Center',
    address: 'Taman Juru, 14000 Bukit Mertajam, Pulau Pinang',
    mapImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVGOXbnlEzlzTo630CM60IwpTd4WBtjXKilaBeagg_KXiDWzuoTaAq1vebYlbv1eOJdbQzM_8gQzl3jWkspnTaaNcs_tVkO6hJL-TO-vZ8OW-ovlO8XPVyMKtMLTIsYwVmebQaq4urhheHo8s-OYMEKgkMB7tTf3t21HR36NqMdBI4uaALB63_whdG6DVaQgWlcHLU507OOQyVQ_mhiDvtj9xJ6ykSCHBXs73Ez1mFEyr37jpDTFbO-Sw78KbQhgAyZcBqedw4qeSV'
  }
];
