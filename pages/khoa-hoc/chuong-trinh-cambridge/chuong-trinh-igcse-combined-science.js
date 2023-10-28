import {Container, Typography} from "@mui/material";
import ForwardSection from "@/common/ForwardSection";
import React from "react";
import Cooperation from "@/components/Cooperation";
import Image from "next/image";
import MainKnowledge from "@/components/Courses/MainKnowledge";
import ExamStructure from "@/components/Courses/ExamStructure";

export default function IgcseEnglishCombinedScienceProgram() {
  const parts = [
    {
      name: 'Paper 1',
      description: 'Thời lượng làm bài 45 phút, chiếm 30% số điểm đánh giá.'
    },
    {
      name: 'Paper 2',
      description: 'Thời lượng làm bài 45 phút, chiếm 30% số điểm đánh giá.'
    },
    {
      name: 'Paper 3',
      description: 'Thời lượng làm bài 75 phút, chiếm 50% số điểm đánh giá.'
    },
    {
      name: 'Paper 4',
      description: 'Thời lượng làm bài 75 phút, chiếm 50% số điểm đánh giá.'
    },
    {
      name: 'Paper 6',
      description: 'Thời lượng làm bài 60 phút, chiếm 20% số điểm đánh giá.'
    },
    {
      name: 'Paper 5',
      description: 'Thời lượng làm bài 60 phút, chiếm 20% số điểm đánh giá.'
    }
  ];

  const knowledge = [
    {
      title: 'Sinh học (Biology)',
      content: [
        'Cấu trúc và chức năng của tế bào và cơ quan trong cơ thể.',
        'Quá trình hô hấp, tuần hoàn và tiêu hóa.',
        'Sinh thái học và quản lý môi trường.',
        'Sinh thái học và quản lý môi trường.'
      ]
    },
    {
      title: 'Hóa học (Chemistry)',
      content: [
        'Nguyên tố, hợp chất và phản ứng hóa học.',
        'Cấu trúc hạt nhân và nguyên tử.',
        'Liên kết hóa học và cấu trúc phân tử.',
        'Sự thay đổi hóa học và tính chất của chất.'
      ]
    },
    {
      title: 'Vật lý (Physics)',
      content: [
        'Chuyển động và lực, bao gồm luật Newton.',
        'Nhiệt độ và nhiệt động học.',
        'Âm thanh, ánh sáng và sự truyền dẫn sóng.',
        'Điện, từ trường và điện từ.'
      ]
    }
  ]

  return (<div>
    <ForwardSection
      title="IGCSE COMBINED SCIENCE"
      subtitle="Khóa học - IGCSE - IGCSE Combined Science"
      imgUrl="/images/chuong-trinh-quoc-te-cambridge/igcse-combined-science.jpg"
    />

    <Container>
      <div>
        <Typography variant="h6">
          Tại sao nên học môn Khoa học tổng hợp IGCSE?
        </Typography>

        <Typography variant="body2" className="text-black mt-4">
          Chương trình học môn Khoa học tổng hợp IGCSE tạo cơ hội cho học sinh tìm hiểu và khám phá Sinh học, Hóa học và
          Vật lý, mỗi môn được phân chia thành các phần chương trình riêng biệt. Đây là một chứng chỉ đơn, ghi nhận một
          điểm duy nhất.
        </Typography>

        <div className="text-black py-3">
          <Typography variant="body2" className="text-black font-bold">Chương trình học:</Typography>

          <ul className="p-10">
            <li style={{listStyle: 'disc', marginLeft: '1em', color: 'black'}} className="text-sm text-black font-thin">
              Giúp học sinh hiểu về thế giới sinh học và công nghệ mà các bạn đang sống, cũng như phát triển khả năng
              quan tâm sáng suốt đối với khoa học và những phát triển khoa học.

            </li>
            <li style={{listStyle: 'disc', marginLeft: '1em', color: 'black'}} className="text-sm text-black font-thin">
              Giúp học sinh hiểu về thế giới sinh học và công nghệ mà các bạn đang sống, cũng như phát triển khả năng
              quan tâm sáng suốt đối với khoa học và những phát triển khoa học.

            </li>
            <li style={{listStyle: 'disc', marginLeft: '1em', color: 'black'}} className="text-sm text-black font-thin">
              Giúp học sinh phát triển hiểu biết về những kỹ năng khoa học quan trọng, cần thiết cho việc tiến tới các
              cấp độ Cambridge AS & A Level.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-3">
        <div>
          <Image src="/images/chuong-trinh-quoc-te-cambridge/igcse-combined-science-image.jpg"
                 alt="igcse-mathematics-image" width={600} height={400}/>
        </div>
        <MainKnowledge knowledges={knowledge}/>
      </div>


      <ExamStructure parts={parts} levels={['Cấp độ Core Exam', 'Cấp độ Extended Exam']}/>

    </Container>

    <Cooperation/>
  </div>);
}
