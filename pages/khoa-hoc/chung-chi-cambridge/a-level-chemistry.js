import ForwardSection from "@/common/ForwardSection";
import React from "react";
import Cooperation from "@/components/Cooperation";
import {Container, Typography} from "@mui/material";
import Image from "next/image";
import MainKnowledge from "@/components/Courses/MainKnowledge";
import ExamStructure from "@/components/Courses/ExamStructure";

export default function ALevelChemistry() {
  const parts = [
    {
      name: 'Paper 1',
      description: 'Thời lượng làm bài 90 phút, chiếm 40% điểm AS Level và 20% tổng điểm A Level.'
    },
    {
      name: 'Paper 3',
      description: 'Thời lượng làm bài 105 phút, chiếm 20% tổng điểm A Level.'
    },
    {
      name: 'Paper 2',
      description: 'Thời lượng làm bài 90 phút, chiếm 40% điểm AS Level và 20% tổng điểm A Level.'
    },
    {
      name: 'Paper 5',
      description: 'Thời lượng làm bài 105 phút, chiếm 20% tổng điểm A Level.'
    },
    {
      name: 'Paper 3',
      description: 'Thời lượng làm bài 80 phút, chiếm 20% điểm AS Level và 10% tổng điểm A Level.'
    },
    {
      name: 'Paper 6',
      description: 'Thời lượng làm bài 80 phút, chiếm 10% tổng điểm A Level.'
    }
  ];

  const knowledge = [
    // previous topics

    {
      title: 'Cấu trúc nguyên tử',
      content: []
    },
    {
      title: 'Bảng tuần hoàn hóa học',
      content: []
    },
    {
      title: 'Ligand và Phản ứng hình thành phức',
      content: []
    },
    {
      title: 'Cân bằng hóa học',
      content: []
    },
    {
      title: 'Nhiệt động học',
      content: []
    },
    {
      title: 'Hóa học hữu cơ',
      content: []
    },
    {
      title: 'Hóa học vô cơ',
      content: []
    },
    {
      title: 'Hóa học lượng tử và phản ứng điện hóa',
      content: []
    },
    {
      title: 'Tổng hợp hóa học',
      content: []
    },
    {
      title: 'Hóa học môi trường và Sản xuất công nghiệp',
      content: []
    },
    {
      title: 'Vật lý hóa học và Phân tích hóa học',
      content: []
    },
    {
      title: 'Thực hành và Kỹ năng thực hành',
      content: []
    }
  ];

  return (<div>
    <ForwardSection
      title="A LEVEL CHEMISTRY"
      subtitle="Khóa học - A Level - A Level Chemistry"
      imgUrl="/images/chung-chi-cambridge/a-level-chemistry.jpg"
    />

    <Container>
      <div>
        <Typography variant="h6">
          Tại sao nên học môn Hóa học Cambridge A Level?
        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          Chương trình học gồm những lý thuyết, khái niệm xoay quanh hóa học và cho thấy được rằng Hóa học luôn tồn tại xung quanh cuộc sống. Đặc biệt, chương trình còn tập trung mạnh vào việc phát triển những kỹ năng thực hành tiên tiến, giúp học sinh nắm vững cách thực hiện các thí nghiệm và ứng dụnghóa học vào các tình huống thực tế một cách thông thạo.
          Cambridge International AS và A Level Hóa học rất phù hợp cho những người học muốn nghiên cứu hóa học hoặc nhiều chủ đề liên quan khác tại đại học hoặc theo đuổi sự nghiệp trong lĩnh vực khoa học.
        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          Hóa học thường được gọi là 'khoa học trung tâm' vì nó giúp kết nối các ngành khoa học khác nhau, chẳng hạn như Sinh học, Vật lý, Địa chất học, Khoa học Môi trường, Y học và Kỹ thuật. A level Hóa học được mô tả là một môn học 'tạo điều kiện' vì nó cho phép nhiều tùy chọn khác nhau cho việc nghiên cứu đại học.
        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          Cambridge International AS và A Level Hóa học rất phù hợp cho những người học muốn nghiên cứu hóa học hoặc nhiều chủ đề liên quan khác tại đại học hoặc theo đuổi sự nghiệp trong lĩnh vực khoa học.
        </Typography>
      </div>

      <div className="flex justify-between mt-5">
        <div>
          <Image
            className="hidden md:block"
            src="/images/chung-chi-cambridge/a-level-chemistry-image.jpg"
                 alt="igcse-mathematics-image" width={600} height={400}/>
        </div>
        <MainKnowledge knowledges={knowledge}/>
      </div>

      <ExamStructure parts={parts} />

    </Container>

    <Cooperation />
  </div>);
}
