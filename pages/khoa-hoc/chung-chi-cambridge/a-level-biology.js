import ForwardSection from "@/common/ForwardSection";
import React from "react";
import Cooperation from "@/components/Cooperation";
import {Container, Typography} from "@mui/material";
import Image from "next/image";
import MainKnowledge from "@/components/Courses/MainKnowledge";
import ExamStructure from "@/components/Courses/ExamStructure";

export default function ALevelBiology() {
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
    {
      title: 'Cấu trúc và chức năng của tế bào',
      content: []
    },
    {
      title: 'Các hệ thống sinh học',
      content: []
    },
    {
      title: 'Di truyền và sinh sản',
      content: []
    },
    {
      title: 'Sinh thái và môi trường',
      content: []
    },
    {
      title: 'Nghiên cứu và kỹ năng thực hành',
      content: []
    },
    {
      title: 'Tiến hóa',
      content: []
    },
    {
      title: 'Sự phát triển của cây và động vật',
      content: []
    },
    {
      title: 'Sinh thái học và bảo tồn',
      content: []
    },
    {
      title: 'Sự điều chỉnh và điều khiển',
      content: []
    },
    {
      title: 'Cơ thể và bệnh tật',
      content: []
    }
  ];
  return (<div>
    <ForwardSection
      title="A LEVEL BIOLOGY"
      subtitle="Khóa học - A Level - A Level Biology"
      imgUrl="/images/chung-chi-cambridge/a-level-biology.jpg"
    />

    <Container>
      <div>
        <Typography variant="h6">
          Tại sao nên học môn Sinh học Cambridge A Level?
        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          Chương trình A Level Sinh học được xây dựng dựa trên các nghiên cứu đáng tin cậy trên toàn cầu, bao gồm những lý thuyết và khái niệm liên quan đến lĩnh vực sinh học, nhằm mở rộng sự hiểu biết của học sinh về thế giới sống. Bên cạnh đó, giáo trình môn học tập trung phát triển kỹ năng thực hành, ứng dụng lý thuyết vào thực tế. Khi học sinh đạt được A level Sinh học, có nhiều cơ hội mở ra cho việc chọn lựa khóa học đại học và nghề nghiệp trong tương lai. Sinh học là môn quan trọng cho nhiều khóa học về Khoa học Sinh học và các ngành học liên quan đến Y học.
        </Typography>
      </div>

      <div className="flex justify-between mt-5">
        <div>
          <Image src="/images/chung-chi-cambridge/a-level-biology-image.jpg"
                 alt="igcse-mathematics-image" width={600} height={400}/>
        </div>
        <MainKnowledge knowledges={knowledge}/>
      </div>

      <ExamStructure parts={parts} levels={['AS Level', 'A Level']}/>

    </Container>

    <Cooperation />
  </div>);
}
