import Head from "next/head";
import { Montserrat } from "@next/font/google";
import { Button, DynamicButtonIcon, Htag, Input, Ptag, Raiting, Tag, Textarea } from "../components";
import { useState } from "react";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";



const montserrat = Montserrat({
  subsets: ['cyrillic'],
  style: ['normal', 'italic']
})


function Home({ menu }: HomeProps) {
  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <>
        <Htag tag='h2'>Ntkejbgk</Htag>
        <Button appearance='primary' arrow='right'>Узнать подробнее</Button>
        <Button appearance='secondary' arrow='down'>Читать отзывы</Button>
        <Ptag size='s'>Маленький</Ptag>
        <Ptag size='m'>Средний</Ptag>
        <Ptag size='l'>Большой</Ptag>
        <Tag>transparent</Tag>
        <Tag size='m' color='red'>red</Tag>
        <Tag size='m' color='primary'>primary</Tag>
        <Raiting rating={rating} isEditable setRating={setRating} />
        <Input placeholder='text' />
        <Textarea placeholder='text' />
        <div>
          <DynamicButtonIcon appearance="secondary" icon="cansel" />
        </div>
      </>
    </>
  )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}