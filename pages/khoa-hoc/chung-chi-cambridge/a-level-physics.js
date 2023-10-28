import ForwardSection from "@/common/ForwardSection";
import React from "react";
import Cooperation from "@/components/Cooperation";
import ExamStructure from "@/components/Courses/ExamStructure";
import {Container, Typography} from "@mui/material";
import Image from "next/image";
import MainKnowledge from "@/components/Courses/MainKnowledge";

export default function ALevelPhysics() {
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
      title: 'Cơ học và Động học',
      content: []
    },
    {
      title: 'Dao động và Sóng',
      content: []
    },
    {
      title: 'Điện tĩnh và Điện động học',
      content: []
    },
    {
      title: 'Cơ học chất điểm và Hệ thống điều hòa',
      content: []
    },
    {
      title: 'Tổng hợp vật lý',
      content: []
    },
    {
      title: 'Vật lý nhiệt và Chất lỏng',
      content: []
    },
    {
      title: 'Vật lý hiện đại',
      content: []
    },
    {
      title: 'Vật lý nguyên tử và hạt nhân',
      content: []
    },
    {
      title: 'Vật lý dòng điện và Vật lý vật liệu',
      content: []
    },
    {
      title: 'Thực hành và Kỹ năng thực hành',
      content: []
    }
  ];


  return (<div>
    <ForwardSection
      title="A LEVEL PHYSICS"
      subtitle="Khóa học - A Level - A Level Physics"
      imgUrl="/images/chung-chi-cambridge/a-level-physics.jpg"
    />

    <Container>
      <div>
        <Typography variant="h6">
          Tại sao nên học môn Vật Lý Cambridge A Level?
        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          Chương trình học bao gồm những khái niệm lý thuyết quan trọng kèm theo các ví dụ về cách áp dụng vật lý vào đời sống hàng ngày. Đặc biệt, chương trình còn tập trung mạnh vào việc phát triển những kỹ năng thực hành tiên tiến, giúp học sinh nắm vững cách thực hiện các thí nghiệm và ứng dụng vật lý vào các tình huống thực tế một cách thông thạo.
        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          A level Vật lý cho phép bạn khám phá những hiện tượng thú vị của vũ trụ, qua các lý thuyết giải thích những gì chúng ta quan sát, và qua các thí nghiệm thực tế để kiểm tra những ý tưởng đó. húng tôi cũng khuyến khích phát triển tư duy sáng tạo và kỹ năng giải quyết vấn đề, những kỹ năng mà học sinh có thể áp dụng vào bất kỳ lĩnh vực nghề nghiệp nào trong tương lai.
        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          Chương trình Cambridge International AS và A Level Vật lý rất phù hợp cho những học sinh có mong muốn nghiên cứu vật lý hoặc các lĩnh vực liên quan khác tại đại học hoặc theo đuổi sự nghiệp trong lĩnh vực khoa học.        </Typography>
      </div>

      <div className="flex justify-between mt-5">
        <div>
          <Image
            className="hidden md:block"
            src="/images/chung-chi-cambridge/a-level-physics-image.jpg"
                 alt="igcse-mathematics-image" width={600} height={400}/>
        </div>
        <MainKnowledge knowledges={knowledge}/>
      </div>

      <ExamStructure parts={parts} />

    </Container>

    <Cooperation/>
  </div>);
}
