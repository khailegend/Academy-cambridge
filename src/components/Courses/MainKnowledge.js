import {Typography} from "@mui/material";
import Image from "next/image";

export default function MainKnowledge({ knowledges }) {
  return (<div className=" pl-2">
    <Typography>
      Những kiến thức trọng tâm bao gồm:
    </Typography>

    <div>
      {
        knowledges?.map((knowledge, index) => {
          return (
            <div key={index} className="flex items-start py-1">
              <Image src="/images/icons/check-circle-icon.svg" width={20} height={20} alt="check-circle-icon"/>

              <div className="ml-2">
                <Typography className={`text-sm px-1 ${knowledge?.content?.length ? 'font-bold' : 'text-black'}`}>
                  {
                    knowledge?.title
                  }
                </Typography>


                {
                  knowledge?.content?.map((content, index) => {
                    return (
                      <Typography key={index} className="text-sm px-1 text-black">
                        {content}
                      </Typography>
                    )
                  })
                }

              </div>


            </div>
          )
        })
      }
    </div>
  </div>);
}
