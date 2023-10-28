import ForwardSection from "@/common/ForwardSection";
import React from "react";
import Cooperation from "@/components/Cooperation";
import ExamStructure from "@/components/Courses/ExamStructure";
import MainKnowledge from "@/components/Courses/MainKnowledge";
import {Box, Container, Typography} from "@mui/material";
import Image from "next/image";

export default function ALevelMathematics() {

  const parts = [
    {
      name: 'Paper 1',
      description: 'Toán thuần túy 1, thời lượng làm bài 110 phút, chiếm 60% điểm AS và 30% tổng điểm A Level.'
    },
    {
      name: 'Paper 3',
      description: 'Toán thuần túy 3, thời lượng làm bài 110 phút, chiếm 30% tổng điểm A Level.'
    },
    {
      name: 'Paper 4/5',
      description: 'Cơ khí/Thống kế, thời lượng làm bài 75 phút chiếm 40% điểm AS và 20% tổng điểm A Level.'
    },
    {
      name: 'Paper 4/5',
      description: 'Cơ khí/Thống kê, thời lượng làm bài 75 phút, chiếm 20% tổng điểm A Level.'
    },
  ];

  const knowledge = [
    {
      title: 'Toán Học Thuần Túy (Pure Mathematics)',
      content: [
        'Đại số',
        'Hàm và Số học',
        'Lôgarit và hàm mũ',
        'Số phức'
      ]
    },
    {
      title: 'Xác suất và Thống kê (Probability and Statistics)',
      content: [
        'Xác suất',
        'Thống kê'
      ]
    },
    {
      title: 'Cơ học (Mechanics)',
      content: [
        'Động lực học',
        'Cơ học liên tục'
      ]
    }
  ];


  return (<div>
    <ForwardSection
      title="A LEVEL MATHEMATICS"
      subtitle="Khóa học - A Level Math"
      imgUrl="/images/chung-chi-cambridge/a-level-mathematics.jpg"
    />

    <Container>
      <div>
        <Typography variant="h6">
          Tại sao nên học môn Toán Cambridge A Level?
        </Typography>

        <Typography variant="body2" className="text-black mt-4">
          "Việc nghiên cứu Toán học, giống như sông Nile, bắt đầu từ sự tỉ mỉ nhỏ bé nhưng kết thúc bằng sự hùng vĩ."
          - <span className="italic font-bold">Charles Caleb Colton</span>
        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          A level Toán học là một bằng cấp linh hoạt, được cả nhà tuyển dụng và các trường đại học đánh giá cao. Nhà tuyển dụng đặc biệt coi trọng chứng chỉ Toán học vì sinh viên học Toán sẽ phát triển kỹ năng tư duy logic và phân tích một cách xuất sắc. Khi giải quyết vấn đề, bạn cũng sẽ luyện tập tính kiên nhẫn khả năng tư duy chiến lược. Việc viết các giải pháp có cấu trúc, chứng minh, luận giải về kết quả sẽ giúp bạn xây dựng các luận điểm logic. Điều quan trọng nhất là bạn sẽ có kỹ năng tính toán xuất sắc cùng khả năng xử lý tốt dữ liệu. A level Toán học thường là một điều kiện cần đối với hầu hết các khóa học đại học trong lĩnh vực Khoa học, Công nghệ, Kỹ thuật và Toán học (STEM),..
        </Typography>
      </div>

      <div className="flex justify-between mt-5">
        <div>
          <Image
            className="hidden md:block"
            src="/images/chung-chi-cambridge/a-level-mathematics-image.jpg"
                 alt="igcse-mathematics-image" width={600} height={400}/>
        </div>
        <MainKnowledge knowledges={knowledge}/>
      </div>

      <ExamStructure parts={parts} levels={['AS Level', 'A Level']}/>

    </Container>


    <Cooperation/>
  </div>);
}



