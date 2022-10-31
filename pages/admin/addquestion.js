import {
  Grid,
  Stack,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import { useState } from "react";


const Forms = () => {

    const [form, setForm] = useState({})
  const onChange = (e)=>{
     setForm({
      ...form,
      [e.target.name]: e.target.value
     })   
  }
  const onSubmit = async ()=>{
      let op1c,op2c,op3c,op4c;
      if(form.answer==1){op1c = 1}else{op1c = 0}
      if(form.answer==2){op2c = 1}else{op2c = 0}
      if(form.answer==3){op3c = 1}else{op3c = 0}
      if(form.answer==4){op4c = 1}else{op4c = 0}
    
      let data = {
        "catagrey":form.catagrey,
        "question":form.question,
        "options":[
          {"op":form.option1,"correct": op1c},
          {"op":form.option2,"correct": op2c},
          {"op":form.option3,"correct": op3c},
          {"op":form.option4,"correct": op4c}
        ]
      }
      console.log(data)
      try {

        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addquestion`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })

        let response = await res.json();
        if (response.qusetionadded) {
console.log('successfully added')

        }
        else {
console.log('failed')
        }

    } catch (error) {
        console.log(error)
    }
  }
  return (

    <ThemeProvider theme={theme}>
      <FullLayout>

      <Grid item xs={12} lg={12}>


            <BaseCard title="Add Quiz">
              <Stack spacing={3}>
        
            
            <FormControl>
              <FormLabel id="catagrey">Catagrey</FormLabel>
              <RadioGroup
                aria-labelledby="catagrey"
                defaultValue="female"
                name="catagrey"
                onChange={onChange}
              >
              <Grid>

                <FormControlLabel value="general" control={<Radio />} label="general" />
                <FormControlLabel value="science" control={<Radio />} label="science"/>
                <FormControlLabel value="history" control={<Radio />} label="history"/>
                <FormControlLabel value="mythalogy" control={<Radio />} label="mythalogy"/>
                <FormControlLabel value="art and literature" control={<Radio />} label="art and literature"/>
                <FormControlLabel value="geography" control={<Radio />} label="geography"/>
                <FormControlLabel value="movie" control={<Radio />} label="movie"/>
                <FormControlLabel value="n" control={<Radio />} label="n"/>
                <FormControlLabel value="B" control={<Radio />} label="B"/>
                <FormControlLabel value="sports" control={<Radio />} label="sports"/>
                <FormControlLabel value="technology" control={<Radio />} label="technology"/>
                <FormControlLabel value="animal" control={<Radio />} label="animal"/>

              </Grid>
              </RadioGroup>
            </FormControl>


            <TextField onChange={onChange} value={form.question ? form.question : ''} name="question" label="question" variant="outlined" />
            <TextField onChange={onChange} value={form.option1 ? form.option1 : ''} name="option1" label="option-1" variant="outlined" />
            <TextField onChange={onChange} value={form.option2 ? form.option2 : ''} name="option2" label="option-2" variant="outlined" />
            <TextField onChange={onChange} value={form.option3 ? form.option3 : ''} name="option3" label="option-3" variant="outlined" />
            <TextField onChange={onChange} value={form.option4 ? form.option4 : ''} name="option4" label="option-4" variant="outlined" />

            <FormLabel id="Answer">Answer</FormLabel>
            <RadioGroup
                aria-labelledby="Answer"
                name="answer"
                onChange={onChange}
              >
              
                <FormControlLabel value="1" control={<Radio />} label="op1"/>
                <FormControlLabel value="2" control={<Radio />} label="op2"/>
                <FormControlLabel value="3" control={<Radio />} label="op3"/>
                <FormControlLabel value="4" control={<Radio />} label="op4"/>
                
              </RadioGroup>
          </Stack>
          <br />
          <Button onClick={onSubmit} variant="outlined" color="error" mt={2}>
            Submit
          </Button>
            </BaseCard>
            </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Forms;
