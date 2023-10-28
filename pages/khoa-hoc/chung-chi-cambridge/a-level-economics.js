import ForwardSection from "@/common/ForwardSection";
import React from "react";
import Cooperation from "@/components/Cooperation";
import {Container, Typography} from "@mui/material";
import Image from "next/image";
import MainKnowledge from "@/components/Courses/MainKnowledge";
import ExamStructure from "@/components/Courses/ExamStructure";

export default function ALevelEconomics() {
  const parts = [
    {
      name: 'Paper 1',
      description: 'Thời lượng làm bài 60 phút, chiếm 33% điểm AS Level và 17% tổng điểm A Level'
    },
    {
      name: 'Paper 2',
      description: 'Thời lượng làm bài 120 phút, chiếm 67% điểm AS Level và 33% tổng điểm A Level'
    },
    {
      name: 'Paper 3',
      description: 'Thời lượng làm bài 75 phút, chiếm 17% tổng điểm A Level'
    },
    {
      name: 'Paper 4',
      description: 'Thời lượng làm bài 120 phút, chiếm 33% tổng điểm A Level'
    },
  ];

  const knowledge = [
    // previous topics

    {
      title: 'Kiến thức nguyên lý kinh tế',
      content: []
    },
    {
      title: 'Kinh tế chính trị',
      content: []
    },
    {
      title: 'Kinh tế quốc gia',
      content: []
    },
    {
      title: 'Kinh tế quốc tế',
      content: []
    },
    {
      title: 'Chính sách kinh tế',
      content: []
    },
    {
      title: 'Phát triển kinh tế',
      content: []
    },
    {
      title: 'Kỹ năng thực hành',
      content: []
    }
  ];

  return (<div>
    <ForwardSection
      title="A LEVEL ECONOMICS"
      subtitle="Khóa học - A Level - A Level Economics"
      imgUrl="/images/chung-chi-cambridge/a-level-economics.jpg"
    />

    <Container>
      <div>
        <Typography variant="h6">
          Tại sao nên học môn Kinh tế Cambridge A Level?
        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          Kinh tế Cambridge A Level giúp học sinh hiểu rõ sâu sắc về tác động của kinh tế đối xã hội khắp thế giới, đánh giá cách nền kinh tế thị trường ảnh hưởng đến chính sách quốc gia và quốc tế.
        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          Học sinh được giảng dạy cách phân tích những vấn đề của nền kinh tế, cùng như cách trình bày và truyền đạt ý kiến, nhận định rõ ràng.
        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          Môn Kinh tế A Level sẽ tạo nền tảng kiến thức vững chắc để theo đuổi ước mơ, sự nghiệp trong các lĩnh vực như quảng cáo, kinh doanh, báo chí và tư vấn quản lý.
        </Typography>
      </div>

      <div className="flex justify-between mt-5">
        <div>
          <Image src="/images/chung-chi-cambridge/a-level-economics-image.jpg"
                 alt="igcse-mathematics-image" width={600} height={400}/>
        </div>
        <MainKnowledge knowledges={knowledge}/>
      </div>

      <ExamStructure parts={parts} />

    </Container>

    <Cooperation />
  </div>);
}
