const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const grades = [
  {
    id: 1,
    name: 'Lớp 1',
  },
  {
    id: 2,
    name: 'Lớp 2',
  },
  {
    id: 3,
    name: 'Lớp 3',
  },
  {
    id: 4,
    name: 'Lớp 4',
  },
  {
    id: 5,
    name: 'Lớp 5',
  },
  {
    id: 6,
    name: 'Lớp 6',
  },
  {
    id: 7,
    name: 'Lớp 7',
  },
  {
    id: 8,
    name: 'Lớp 8',
  },
  {
    id: 9,
    name: 'Lớp 9',
  },
  {
    id: 10,
    name: 'Lớp 10',
  },
  {
    id: 11,
    name: 'Lớp 11',
  },
  {
    id: 12,
    name: 'Lớp 12',
  },
];

const magicCardContent = [
  {
    id: 0,
    title: 'Môi trường học tập thuận tiện',
    img: '/images/magic-card-icon/study-love.svg',
    content:
      'Khuyến khích sự tương tác và bày tỏ quan điểm cá nhân. Tạo động lực giúp học sinh thực hiện đam mê.',
    isVisible: false,
    backgroundColor: '#007AD8;',
    textColor: 'white',
  },
  {
    id: 2,
    title: 'Học kèm 1:1',
    img: '/images/magic-card-icon/dou-user.svg',
    content:
      'Mỗi học sinh đều được hướng dẫn bởi một gia sư có trình độ chuyên môn cao trong từng môn học.',
    isVisible: false,
    backgroundColor: '#FFB84C',
    textColor: 'white',
  },
  {
    id: 1,
    title: 'Đội ngũ chất lượng',
    img: '/images/magic-card-icon/hat.svg',
    content:
      'Gia sư của chúng tôi được đào tạo và định hướng phương pháp, nội dung giảng dạy. ',
    isVisible: false,
    backgroundColor: '#17249A',
    textColor: 'white',
  },
  {
    id: 3,
    title: 'Giáo trình quốc tế',
    img: '/images/magic-card-icon/dou-book.svg',
    content:
      'Chương trình học được cập nhật liên tục và biên soạn phù hợp cho từng học viên. Đảm bảo ôn luyện hiệu quả, tiếp cận chi tiết các dạng đề và thành công đạt được mục tiêu.',
    isVisible: false,
    backgroundColor: '#F5F5F5', //
    textColor: 'black',
  },
];

const studentAchievementsList = [
  {
    id: 1,
    name: 'Phương Nghi',
    school: 'THCS Vinschool',
    title: 'Học sinh xuất sắc',
    img: '/images/avatar/thienkim.png',
    desc: 'Tiến bộ từ 6.5 điểm lên 9.4 điểm Toán. Đạt học sinh Xuất sắc NH 2022-2023 Thi đậu đầu vào hệ Cambridge lớp 7 ',
  },
  {
    id: 2,
    name: 'Bảo Ngọc',
    school: 'THCS Đinh Thiện Lý',
    title: 'Flyers 15 khiên. Học sinh giỏi',
    img: '/images/avatar/baongoc.png',
    desc: 'Thi đạt chứng chỉ Flyers 15 khiên, 10 điểm Toán. Đạt học sinh Giỏi NH 2022-2023',
  },
  {
    id: 3,
    name: 'Ngọc Trâm',
    school: 'Trường Quốc tế Nam Mỹ',
    title: 'Học sinh giỏi',
    img: '/images/avatar/ngoctram.png',
    desc: 'Đạt IELTS 6.5 và 9.5 điểm Tiếng Anh. Đạt học sinh Giỏi NH 2022-2023',
  },
  {
    id: 4,
    name: 'Ruby Bảo Ngọc',
    school: 'TrườngTHCS Vinschool',
    title: 'Học sinh xuất sắc',
    img: '/images/avatar/rubybaongoc.png',
    desc: '2 năm liền học sinh giỏi, 2 năm tiếp theo học sinh xuất sắc Thi đậu đầu vào hệ Cambridge lớp 6 ',
  },
  {
    id: 5,
    name: 'Khánh Linh',
    school: 'TrườngTH Vinschool',
    title: 'Học sinh giỏi',
    img: '/images/avatar/khanhlinh.png',
    desc: 'Đã tiến bộ từ 6 điểm lên 10 điểm Toán. Đạt học sinh Giỏi NH 2022-2023',
  },
  {
    id: 6,
    name: 'Minh An',
    school: 'TrườngTH Vinschool',
    title: 'Starters 15 khiên',
    img: '/images/avatar/minhan.png',
    desc: ' Đã tiến bộ từ 7 điểm lên 10 điểm Toán. Chứng chỉ Staters 15 khiên',
  },
];

const feedbackList = [
  {
    id: 1,
    parentName: 'Phụ huynh - Trang',
    job: 'Luật sư',
    studentName: '',
    comment:
      'Mẹ rất bất ngờ với sự tiến bộ và thành tích của các con. Hai con đều đã tiến bộ từ 6 điểm lên 10 điểm môn Toán.',
    program: 'Standard ',
    grade: '9',
    avatarUlr: '/images/feedback-msg/trang-ava.png',
    rating: 5,
    feedBackMsg: [
      '/images/feedback-msg/mary-sofia-1.png',
      '/images/feedback-msg/mary-sofia-1.png',
    ],
  },
  {
    id: 2,
    parentName: 'Phụ huynh - Công Anh',
    job: 'Doanh nhân',
    studentName: 'Student 2',
    comment:
      'Cô Tuyền của Cambridge Academy đã giúp đỡ con rất nhiều. Mẹ cảm ơn Trung tâm.',
    program: 'Cambridge ',
    grade: '12',
    avatarUlr: '/images/feedback-msg/cong-anh-ava.png',
    rating: 5,
    feedBackMsg: [
      '/images/feedback-msg/cong-anh-1.png',
      '/images/feedback-msg/cong-anh-2.png',
    ],
  },
  {
    id: 3,
    parentName: 'Phụ huynh - Linh',
    job: 'Giám đốc',
    studentName: 'Student 3',
    comment:
      'Nhờ các cô mà điểm của con mới cao được như vậy. Gửi con cho hai cô, mẹ yên tâm rồi. ',
    program: 'Cambridge ',
    grade: '12',
    avatarUlr: null,
    rating: 5,
    feedBackMsg: [
      '/images/feedback-msg/brian-1.png',
      '/images/feedback-msg/brian-2.png',
    ],
  },
  {
    id: 4,
    parentName: 'Phụ huynh - Bình',
    job: 'CEO Doanh nghiệp',
    studentName: 'Student 4',
    comment:
      'Từ ghét Toán thành thích Toán, nhưng nhờ thầy cô Cambridge Academy tận tâm và kiên nhẫn, giúp con đạt thành tích tốt.',
    program: 'Cambridge ',
    grade: '12',
    avatarUlr: '/images/feedback-msg/binh-ava.png',
    rating: 5,
    feedBackMsg: [
      '/images/feedback-msg/binh-1.jpeg',
      '/images/feedback-msg/binh-2.jpeg',
    ],
  },
  {
    id: 5,
    parentName: 'Phụ huynh - Liễu',
    job: 'Doanh nhân',
    studentName: 'Student 5',
    comment: 'Con thi đậu vào Vinschool rồi các cô. Mẹ cảm ơn nhé!',
    program: 'Cambridge ',
    grade: '12',
    avatarUlr: '/images/feedback-msg/lieu-ava.png',
    rating: 5,
    feedBackMsg: [
      '/images/feedback-msg/lieu-1.png',
      '/images/feedback-msg/lieu-2.png',
    ],
  },
  {
    id: 6,
    parentName: 'Phụ huynh - Phương',
    job: 'Nha sĩ',
    studentName: 'Student 5',
    comment:
      'Nhờ cô giáo của Cambridge Academy con mới đạt được kết quả tốt như vậy. Bạn ấy vui lắm!',
    program: 'Cambridge ',
    grade: '12',
    avatarUlr: '/images/feedback-msg/ha-phuong.png',
    rating: 5,
    feedBackMsg: [
      '/images/feedback-msg/vicky-1.png',
      '/images/feedback-msg/vicky-2.png',
    ],
  },
];

const FAQQuestion = [
  {
    id: 1,
    question: 'Tại sao nên chọn học và thi chứng chỉ Cambridge?',
    answer: 'Chứng chỉ Cambridge là một trong những chứng chỉ tiếng Anh phổ biến nhất, bằng tú tài Quốc tế A level được công nhận rộng rãi trên toàn thế giới.\nQuy trình đánh giá và kiểm tra của Cambridge đảm bảo chất lượng.\nChứng chỉ Cambridge là yếu tố quan trọng khi xin học bổng tại các trường Đại học uy tín hàng đầu thế giới.\n'
  },
  {
    id: 2,
    question: 'Học gia sư tại nhà thì giáo viên có hỗ trợ giáo trình trên trường của bé không?',
    answer: 'Giáo viên luôn giúp học sinh bổ sung kiến thức, giải quyết các khó khăn và những câu hỏi mà học sinh không có cơ hội đặt ra tại trường. Bên cạnh đó Giáo viên đảm bảo trình độ tiếng anh của học sinh theo đúng lộ trình chuẩn Cambridge.'
  },
  {
    id: 3,
    question: 'Làm thế nào để tìm một giáo viên phù hợp?',
    answer: 'Cambridge Academy sắp xếp một buổi kiểm tra chi tiết trình độ của học sinh, xác định mục tiêu và phong cách học tập cá nhân.\nBộ phận chuyên môn của Cambridge Academy liên tục theo dõi và đánh giá quá trình học tập, giảng dạy của học sinh và giáo viên.'
  },
  {
    id: 4,
    question: 'Cambridge Academy có đăng ký thi chứng chỉ cho bé không?',
    answer: 'Chúng tôi cam kết học sinh đạt chứng chỉ Cambridge theo đúng lộ trình tại các hội đồng thi với tiêu chuẩn Quốc tế. \n' +
      'Cambridge Academy nhận đăng ký thi chứng chỉ miễn phí cho thí sinh tự do hoàn toàn miễn phí'
  },
  {
    id: 5,
    question: 'Cambridge Academy có định hướng gì sau khi bé tốt nghiệp cấp 3?',
    answer: 'Đội ngũ chuyên gia của Cambridge Academy tư vấn chọn trường phù hợp giúp học viên hoàn tất hồ sơ, văn bằng yêu cầu của trường mà học viên có nguyện vọng đặt chân trên chặng đường tiếp theo.'
  }
];

const schoolListLogo = [
  {
    id: 1,
    name: 'Cambridge University',
    url: '/images/courses/logo-uoc.png',
  },
  {
    id: 2,
    name: 'Vin University',
    url: '/images/courses/vinuni.png',
  },
  {
    id: 3,
    name: 'NYU',
    url: '/images/courses/NYU.png',
  },
  {
    id: 4,
    name: 'Rmit University',
    url: '/images/courses/rmit.png',
  },
  {
    id: 5,
    name: 'Sydney University',
    url: '/images/courses/sydney-uni.png',
  },
  {
    id: 6,
    name: 'NYU',
    url: '/images/courses/NYU.png',
  },
  {
    id: 7,
    name: 'FullBright University',
    url: '/images/courses/fullbirght.png',
  },
  {
    id: 8,
    name: 'BUV Brishtish University',
    url: '/images/courses/buv.png',
  },
];
const standardSchoolListLogo = [
  {
    id: 1,
    name: 'Đại Học y dược',
    url: '/images/logos/y-duoc.png',
  },
  {
    id: 3,
    name: 'Đại học bách khoa',
    url: '/images/logos/back-khoa.png',
  },
  {
    id: 2,
    name: 'Đại học ngoại thương',
    url: '/images/logos/ngoai_thuong.png',
  },
  {
    id: 4,
    name: 'Đại học khoa học tự nhiên',
    url: '/images/logos/khtn.png',
  },
  {
    id: 5,
    name: 'Sydney University',
    url: '/images/logos/ueh.png',
  },
];
const bookData = [
  {
    name: 'Cambridge Mathematics ',
    imageUrl: '/images/math.png',
    content: [
      'Kiến thức của môn Cambridge Mathematics (Toán học) tích hợp nhiều vấn đề toán học lý thuyết và thực tiễn. ',
      'Tại Cambridge Academy, môn học này được giảng dạy bằng Tiếng Việt (chương trình tích hợp) và Tiếng Anh (hệ Cambridge). ',
    ],
  },
  {
    name: 'Cambridge Global English',
    imageUrl: '/images/english.png',
    content: [
      'Môn học sẽ được giảng dạy bắt buộc trong chương trình của các em kể từ khi các em chính thức vào lớp tiểu học',
      'Tại Cambridge Academy, gia sư và học viên giao tiếp hoàn toàn bằng Tiếng Anh để nâng cao kiến thức và phản xạ của các em.',
    ],
  },
  {
    name: 'Cambridge Primary Science',
    imageUrl: '/images/science.png',
    content: [
      'Đây là môn học tổng hợp kiến thức từ 3 môn học: Hóa học, Vật lý, Sinh học với cấp độ nâng cao dần theo từng cấp học.',
      'Tại Cambridge Academy, những gia sư có kinh nghiệm truyền tải kiến thức Khoa học tổng hợp cô đọng, súc tích và đúng trọng tâm giúp các em có kết quả học tập tốt.',
    ],
  },
];

const CambridgeCertificationCarouselData = [
  {
    id: 1,
    name: 'IGCSE',
    desc: 'IGCSE (International General Certificate of Secondary Education) là chứng chỉ Giáo dục Trung học Phổ thông Quốc tế dành cho học sinh ở cuối bậc Trung học, được công nhận trên toàn cầu.',
    url: '/images/igcse-blog.png',
  },
  {
    id: 2,
    name: 'AS & A Level',
    desc: 'A-Level – viết tắt của Advanced Level Qualification, là một Chứng chỉ Giáo dục Phổ thông Bậc Cao. hóa A-Level thường kéo dài trong 2 năm, chia làm 2 bậc. AS Level (viết tắt của Advanced Subsidiary) là năm đầu tiên.',
    url: '/images/as-a-blog.png',
  },
  {
    id: 3,
    name: 'IB',
    desc: 'International Baccalaureate (hay IB) là chương trình đào tạo dự bị Đại học, được dành cho các bạn học sinh mong muốn được tiếp cận nền giáo dục chất lượng cấp quốc tế.',
    url: '/images/ib-blog.png',
  },
  {
    id: 4,
    name: 'SAT',
    desc: 'Scholastic Assessment Test (hay SAT) là bài thi kiểm tra khả năng học thuật dành cho tất cả các sinh viên Mỹ dự tuyển vào các trường Cao đẳng/Đại học.',
    url: '/images/SAT-blog.png',
  },
  {
    id: 5,
    name: 'AP',
    desc: 'Advanced Placement (hay AP) bao gồm các khóa học tương ứng với nội dung đào tạo năm đầu của Đại học, cho phép học sinh làm quen, nhập môn và có cơ hội lấy được tín chỉ Đại học ngay từ khi còn ở bậc phổ thông.',
    url: '/images/ap-blog.png',
  },
];

const cambridgeBlogs = [
  {
    id: 1,
    title: 'IGCSE Mathematics',
    link: '/khoa-hoc/chuong-trinh-cambridge/chuong-trinh-igcse-mathematics',
    img: '/images/math-blog.jpeg',
  },
  {
    id: 2,
    title: 'IGCSE Combined Science ',
    link: '/khoa-hoc/chuong-trinh-cambridge/chuong-trinh-igcse-combined-science',
    img: '/images/igcse-blog.jpeg',
  },
  {
    id: 3,
    title: 'IGCSE English Language ',
    link: '/khoa-hoc/chuong-trinh-cambridge/chuong-trinh-igcse-english-language',
    img: '/images/igcse-english.jpeg',
  },
];
const levelBlogs = [
  {
    id: 1,
    title: 'A Level Mathematics',
    link: '/khoa-hoc/chung-chi-cambridge/a-level-mathematics',
    img: '/images/level-math.jpeg',
  },
  {
    id: 2,
    title: 'A Level Physics',
    link: '/khoa-hoc/chung-chi-cambridge/a-level-physics',
    img: '/images/level-physic.jpeg',
  },
  {
    id: 3,
    title: 'A Level Chemistry',
    link: '/khoa-hoc/chung-chi-cambridge/a-level-chemistry',
    img: '/images/level-chemistry.jpeg',
  },
  {
    id: 4,
    title: 'A Level Biology',
    link: '/khoa-hoc/chung-chi-cambridge/a-level-biology',
    img: '/images/level-biology.jpeg',
  },
  {
    id: 5,
    title: 'A Level Business',
    link: '/khoa-hoc/chung-chi-cambridge/a-level-business',
    img: '/images/level-business.jpeg',
  },
  {
    id: 6,
    title: 'A Level Economics',
    link: '/khoa-hoc/chung-chi-cambridge/a-level-economics',
    img: '/images/level-economics.jpeg',
  },
];
const SATBlogs = [
  {
    id: 1,
    title: 'Reading & Writing',
    link: '/',
    img: '/images/reading-writing.jpeg',
  },
  {
    id: 2,
    title: 'Math ',
    link: '/',
    img: '/images/math.jpeg',
  },
  {
    id: 3,
    title: 'Language ',
    link: '/',
    img: '/images/language.jpeg',
  },
];
const schoolList = [
  {
    title: 'PTLC Vinschool',
    link: '/',
    img: '/images/vinschool.jpeg',
    desc: 'Bằng cấp: A Level',
    type: ['Cambridge'],
  },
  {
    title: 'British International School (BIS)',
    link: '/',
    img: '/images/bis.jpeg',
    desc: 'Bằng cấp: A Level',
    type: ['Cambridge'],
  },
  {
    title: 'British Vietnamese International School (BVIS)',
    link: '/',
    img: '/images/bvis.jpeg',
    desc: 'Bằng cấp: A Level',
    type: ['Cambridge'],
  },
  {
    title: 'Wellspring',
    link: '/',
    img: '/images/wellspring.jpeg',
    desc: 'Bằng cấp: A Level',
    type: ['Cambridge'],
  },
  {
    title: 'Vietnam Australia International School (VAS)',
    link: '/',
    img: '/images/vas.jpeg',
    desc: 'Bằng cấp: A Level',
    type: ['Cambridge'],
  },
  {
    title: 'ESchool  ',
    link: '/',
    img: '/images/eschool.jpeg',
    desc: 'Bằng cấp: A Level',
    type: ['Cambridge', 'Phổ Thông Việt Nam'],
  },
  {
    title: 'Trần Đại Nghĩa',
    link: '/',
    img: '/images/trandainghia.jpeg',
    desc: 'Bằng cấp: Tốt nghiệp THPT',
    type: ['Tích hợp'],
  },
  {
    title: 'Đinh Thiện Lý',
    link: '/',
    img: '/images/dinhthienly.jpeg',
    desc: 'Bằng cấp: Tốt nghiệp THPT',
    type: ['Bộ Giáo dục & Đào tạo'],
  },
];
module.exports = {
  phoneRegExp,
  grades,
  magicCardContent,
  studentAchievementsList,
  feedbackList,
  FAQQuestion,
  schoolListLogo,
  bookData,
  CambridgeCertificationCarouselData,
  cambridgeBlogs,
  levelBlogs,
  SATBlogs,
  schoolList,
  standardSchoolListLogo,
};
