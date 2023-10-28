import ForwardSection from "@/common/ForwardSection";
import React from "react";
import Cooperation from "@/components/Cooperation";
import {Container, Typography} from "@mui/material";
import Image from "next/image";
import MainKnowledge from "@/components/Courses/MainKnowledge";
import ExamStructure from "@/components/Courses/ExamStructure";

export default function IgcseEnglishLanguageProgram() {
  const parts = [
    {
      name: 'Paper 1 (50%)',
      description: 'Reading.'
    },
    {
      name: 'Paper 2 (50%)',
      description: 'Writing.'
    },
  ];
  const knowledge = [
    {
      title: 'Kỹ năng đọc hiểu',
      content: []
    },
    {
      title: 'Kỹ năng viết',
      content: []
    },
    {
      title: 'Kỹ năng ngôn ngữ kỹ thuật',
      content: []
    },
    {
      title: 'Viết tóm tắt',
      content: []
    },
    {
      title: 'Phân tích ngôn ngữ',
      content: []
    },
    {
      title: 'Viết đạo diễn',
      content: []
    },
    {
      title: 'Văn miêu tả',
      content: []
    },
    {
      title: 'Viết tường thuật',
      content: []
    }
  ];

  return (<div>
    <ForwardSection
      title="IGCSE ENGLISH LANGUAGE"
      subtitle="Khóa học - IGCSE - IGCSE English Language "
      imgUrl="/images/chuong-trinh-quoc-te-cambridge/igcse-english-language.jpg"
    />

    <Container>
      <div>
        <Typography variant="h6">
          Tại sao nên học môn Tiếng Anh IGCSE?
        </Typography>

        <Typography variant="body2" className="text-black mt-4">
          Môn IGCSE Tiếng Anh (English Language) chiếm vị trí tối quan trọng trong khung chương trình IGCSE, tập trung vào việc phát triển khả năng sử dụng và nhận thức sâu hơn về ngôn ngữ Tiếng Anh.
        </Typography>

        <div className="text-black py-3">
          <Typography variant="body2" className="text-black font-bold">Chương trình học:</Typography>

          <ul className="p-10">
            <li style={{listStyle: 'disc', marginLeft: '1em', color: 'black'}} className="text-sm text-black font-thin">
              Sử dụng vốn từ vựng phong phú
            </li>
            <li style={{listStyle: 'disc', marginLeft: '1em', color: 'black'}} className="text-sm text-black font-thin">
              Sử dụng đúng chính tả, dấu câu và ngữ pháp

            </li>
            <li style={{listStyle: 'disc', marginLeft: '1em', color: 'black'}} className="text-sm text-black font-thin">
              Phát triển phong cách viết cá nhân
            </li>
          </ul>
        </div>
      </div>

      <div className="block md:flex justify-between mt-3">
        <div>
          <Image
            className="hidden md:block"
            src="/images/chuong-trinh-quoc-te-cambridge/igcse-english-language-image.png"
                 alt="igcse-english-language-image" width={600} height={400}/>
        </div>
        <MainKnowledge knowledges={knowledge}/>
      </div>


      <ExamStructure parts={parts} />

    </Container>


    <Cooperation/>
  </div>);
}
