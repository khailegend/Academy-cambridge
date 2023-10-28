import Grid from "@mui/material/Grid";
import {Box, Typography} from "@mui/material";
export default function ExamStructure({ parts, levels }) {
  return (
    <Box sx={{ width: '100%' }} className="p-5 pt-10 flex flex-col items-center justify-center">
      <Typography variant="h4" className="text-center mb-4 font-bold">CẤU TRÚC BÀI THI</Typography>

      {
        levels?.length &&
        <Grid
          container
          gap={2}
          justifyContent="center"
          className="w-2/3">
          {
            levels?.map((level, index) => {
              return (
                <Grid item key={index} xs={5}>
                  <Typography className="text-md font-bold py-2">
                    {level}
                  </Typography>
                </Grid>
              )
            })
          }
        </Grid>
      }

      <Grid
        container
        gap={2}
        justifyContent="center"
        className="w-2/3">
        {
          parts?.map((part, index) => {
            return (
              <Grid item key={index} xs={5}
                    className="p-5 flex-col flex items-start justify-center"
                    sx={{border: '1px solid #000'}}>
                <Typography className="text-md font-bold py-2">
                  {part.name}
                </Typography>

                <Typography className="text-sm text-black pt-2">
                  {part.description}
                </Typography>

              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  );
}
