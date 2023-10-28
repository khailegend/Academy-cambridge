import ForwardSection from "@/common/ForwardSection";
import React from "react";
import Cooperation from "@/components/Cooperation";
import {Container, Typography} from "@mui/material";
import Image from "next/image";
import MainKnowledge from "@/components/Courses/MainKnowledge";
import ExamStructure from "@/components/Courses/ExamStructure";

export default function ALevelBusiness() {
  const parts = [
    {
      name: 'Paper 1',
      description: 'Thời lượng làm bài 75 phút, chiếm 40% điểm AS Level và 20% tổng điểm A Level.'
    },
    {
      name: 'Paper 3',
      description: 'Thời lượng làm bài 105 phút, chiếm 30% tổng điểm A Level'
    },
    {
      name: 'Paper 2',
      description: 'Thời lượng làm bài 90 phút, chiếm 60% điểm AS Level và 30% tổng điểm A Level.'
    },
    {
      name: 'Paper 4',
      description: 'Thời lượng làm bài 75 phút, chiếm 20% tổng điểm A Level.'
    },
  ];

  const knowledge = [
    {
      title: 'Kiến thức cơ bản về kinh doanh',
      content: []
    },
    {
      title: 'Quản lý chiến lược',
      content: []
    },
    {
      title: 'Kế toán và tài chính',
      content: []
    },
    {
      title: 'Quản lý nhân sự',
      content: []
    },
    {
      title: 'Kinh doanh quốc tế',
      content: []
    },
    {
      title: 'Phân tích thị trường',
      content: []
    },
    {
      title: 'Tiếp thị',
      content: []
    },
    {
      title: 'Nguyên tắc tài chính',
      content: []
    },
    {
      title: 'Quản lý sản phẩm và dịch vụ',
      content: []
    },
    {
      title: 'Phân tích đối thủ cạnh tranh',
      content: []
    },
    {
      title: 'Thực hành kinh doanh',
      content: []
    }
  ];

  return (<div>
    <ForwardSection
      title="A LEVEL BUSINESS"
      subtitle="Khóa học - A Level - A Level Business"
      imgUrl="/images/chung-chi-cambridge/a-level-business.jpg"
    />

    <Container>
      <div>
        <Typography variant="h6">
          Tại sao nên học môn Kinh doanh Cambridge A Level?
        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          Kinh doanh Cambridge A Level giúp học sinh hiểu rõ về các khái niệm cốt lõi như kế hoạch kinh doanh, tài chính doanh nghiệp, quản lý chiến lược và quan hệ công chúng. Bạn sẽ thực hành áp dụng kiến thức vào các tình huống thông qua các bài tập và nhiệm vụ thực tế, từ đó quản lý và tổ chức một doanh nghiệp hiệu quả.
        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          Môn học này giúp học sinh phát triển những kiến thức và kỹ năng quan trọng để hiểu về cách một doanh nghiệp hoạt động, từ việc quản lý tài chính, tiếp thị, quản lý nhân sự đến phân tích thị trường và chiến lược kinh doanh.        </Typography>

        <Typography variant="body2" className="text-black pt-2">
          Chương trình khuyến khích học sinh phát triển kỹ năng giao tiếp, làm việc nhóm, và giải quyết vấn đề.
        </Typography>
      </div>

      <div className="flex justify-between mt-5">
        <div className="hidden md:block min-w-fit">

        </div>
        <MainKnowledge knowledges={knowledge}/>
      </div>

      <ExamStructure parts={parts} />

    </Container>

    <Cooperation />
  </div>);
}
