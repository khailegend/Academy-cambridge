import {Container, Typography} from "@mui/material";
import ForwardSection from "@/common/ForwardSection";
import React from "react";
import Cooperation from "@/components/Cooperation";
import Image from "next/image";
import MainKnowledge from "@/components/Courses/MainKnowledge";
import ExamStructure from "@/components/Courses/ExamStructure";

export default function IgcseMathematicsProgram() {
  const parts = [
    {
      name: 'Paper 1',
      description: 'Thời lượng làm bài 60 phút, chiếm 35% số điểm đánh giá.'
    },
    {
      name: 'Paper 2',
      description: 'Thời lượng làm bài 90 phút, chiếm 35% số điểm đánh giá.'
    },
    {
      name: 'Paper 3',
      description: 'Thời lượng làm bài 120 phút, chiếm 65% số điểm đánh giá.'
    },
    {
      name: 'Paper 4',
      description: 'Thời lượng làm bài 150 phút, chiếm 65% số điểm đánh giá.'
    },
  ];

  const knowledge = [
    {
      title: 'Số thập phân, Phân số và Tỷ lệ phần trăm',
      content: []
    },
    {
      title: 'Tỉ lệ và Tương quan',
      content: []
    },
    {
      title: 'Tập hợp',
      content: []
    },
    {
      title: 'Chuỗi',
      content: []
    },
    {
      title: 'Biểu diễn đại số và Công thức',
      content: []
    },
    {
      title: 'Đồ thị - Đường thẳng, Bậc hai, Bậc ba và Mũ',
      content: []
    },
    {
      title: 'Đo lường và Đơn vị - Độ dài, Diện tích và Thể tích',
      content: []
    },
    {
      title: 'Hình dạng và Góc',
      content: []
    },
    {
      title: 'Vectơ',
      content: []
    },
    {
      title: 'Biến đổi',
      content: []
    },
    {
      title: 'Trigonometri',
      content: []
    },
    {
      title: 'Xác suất và Thống kê',
      content: []
    },
    {
      title: 'Phép tính - Chỉ dành cho cấp độ Mở rộng',
      content: []
    }
  ];

  return (
    <div>
      <ForwardSection
        title="IGCSE MATHEMATICS"
        subtitle="Khóa học - IGCSE - IGCSE Math"
        imgUrl="/images/chuong-trinh-quoc-te-cambridge/igcse-mathematics.jpg"
      />

      <Container>
        <div>
          <Typography variant="h6">
            Tại sao nên học môn Toán Cambridge IGCSE?
          </Typography>

          <Typography variant="body2" className="text-black mt-4">
            Môn Toán Cambridge IGCSE tạo nền tảng kiến thức vững chắc và chuẩn bị hành trang cho các bạn học sinh tham gia
            kỳ thi IGCSE. Bên cạnh đó, chương trình Cambridge khuyến khích học sinh phát triển khả năng toán học của bản
            thân như một kỹ năng quan trọng trong cuộc sống, cũng như là một nền tảng mạnh mẽ để tiến xa trong việc nghiên
            cứu toán học hoặc hỗ trợ kỹ năng trong các môn học khác.
          </Typography>

          <div className="text-black py-3">
            <Typography variant="body2" className="text-black font-bold">Chương trình học:</Typography>

            <ul className="p-10">
              <li style={{listStyle: 'disc', marginLeft: '1em', color: 'black'}} className="text-sm text-black font-thin">
                Phát triển sự thành thạo, tự tin và thành thạo trong việc sử dụng kỹ thuật toán học cùng với và không cần
                sử dụng máy tính, tạo dựng sự hiểu biết về toán học.
              </li>
              <li style={{listStyle: 'disc', marginLeft: '1em', color: 'black'}} className="text-sm text-black font-thin">
                Phát triển khả năng cảm nhận về số lượng, mẫu mực và mối quan hệ, khuyến khích tư duy lý luận và phân tích
                của học sinh.
              </li>
              <li style={{listStyle: 'disc', marginLeft: '1em', color: 'black'}} className="text-sm text-black font-thin">
                Tập trung mạnh vào việc giải quyết vấn đề trong toán học và trong ngữ cảnh thực tế.
              </li>
              <li style={{listStyle: 'disc', marginLeft: '1em', color: 'black'}} className="text-sm text-black font-thin">
                Khuyến khích cách trình bày và diễn giải kết quả một cách thích hợp, giúp học sinh hiểu cách truyền đạt và
                lý luận bằng cách sử dụng toán học
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <div>
            <Image
              className="hidden md:block"
              src="/images/chuong-trinh-quoc-te-cambridge/igcse-mathematics-image.png"
                   alt="igcse-mathematics-image" width={600} height={400}/>
          </div>
          <MainKnowledge knowledges={knowledge}/>
        </div>


        <ExamStructure parts={parts} levels={['Cấp độ Core Exam', 'Cấp độ Extended Exam']}/>

      </Container>

      <Cooperation/>
    </div>);
}
