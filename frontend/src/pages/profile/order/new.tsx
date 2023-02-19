import React, { ReactElement, useState } from 'react'
import Head from 'next/head'
import { useForm } from "react-hook-form"

import { FcDocument } from "react-icons/fc"

import {default as VerifyLogo} from "../../../media/logos/Verify.svg"
import {default as GraphLogo} from "../../../media/logos/Graph.svg"
import {default as PaperUploadLogo} from "../../../media/logos/PaperUpload.svg"

import styles from "../../../styles/pages/profile.module.scss"
import Layout from '../../../components/layouts/ServiceLayout/ServiceLayout'
import Input from 'src/components/UI/Input/Input'
import { Box, Checkbox, Flex, Grid, Radio, RadioGroup, Stack, Input as CInput, Select} from '@chakra-ui/react'
import rules from 'src/react-hook-form/rules'

import TileBlock from 'src/components/TileBlock/TileBlock'
import Button from 'src/components/UI/Button/Button'
import Helper, { mockNewOrder, mockNewOrderDocuments } from 'src/features/Navigation/Navigation'
import FormSegment from 'src/features/Profile/FormSegment'
import OrderSegment from 'src/features/Profile/OrderSegment'
import HelperMessage from 'src/components/HelperMessage/HelperMessage'
import { UserData } from 'src/app/redux/slices/dataSlice'
import { AnimatePresence } from 'framer-motion'
import FileInput from 'src/components/UI/FileInput/FileInput'
import { useAppDispatch, useAppSelector } from 'src/app/redux/store'
import { setData } from 'src/app/redux/slices/helperSlice'

export default function OrderPage() {
  const [activePage, setactivePage] = useState("Общее")
  const {control, setValue} = useForm<UserData>({
    mode: "all"
  })
  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.data.data)

  React.useEffect(() => {
    Object.entries(data).forEach((v) => {
      setValue(v[0], v[1])
    })
  }, [data])

  React.useEffect(() => {
    if (activePage == "Софинансирование") {
      setTimeout(() => {
        dispatch(setData({text: "Софинансирование — это ресурсы, которые есть у команды проекта до подачи заявки на грантовый конкурс. Раздел включает в себя два подраздела: собственный вклад (руководителя и членов проектной команды, наставников) и вклад партнеров проекта."}))
      }, 3000)
    } else if (activePage == "Расходы") {
      setTimeout(() => {
        dispatch(setData({text: "В данной вкладке необходимо отразить те необходимые ресурсы, которых нет ни у команды проекта, ни у партнеров, ни у спонсоров, т.е. запрашиваемую сумму проекта."}))
      }, 2000)
    }
    else if (activePage == "Общее"){
      dispatch(setData({text: "Большинство данных в формах создания заявки было уже заполнено. Осталось: Общее, Расходы и Софинансирования"}))
    } else {
      dispatch(setData({text: ""}))
    }
  }, [activePage])

  return (
    <>
      <Head>
        <title>Профиль | Молодежный бит</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <AnimatePresence mode='wait'>
            {activePage == "Общее" && (
              <CommonPage control={control}/>
            )}

            {activePage == "Расходы" && (
              <ExpensesPage/>
            )}

            {activePage == "Софинансирование" && (
              <FinanPage control={control}/>
            )}

            {activePage == "Договор о предоставлении гранта" && (
              <DocumentGarantPage control={control}/>
            )}

          </AnimatePresence>
        </div>
        <Flex 
        flexDir="column"
        style={{gridColumn: "1", gridRow: "2", height: "min-content", gap: "1rem"}}>
          <TileBlock style={{gridColumn: "1", gridRow: "2", height: "min-content"}}>
            <Helper onClick={(v) => {setactivePage(v); console.log(v)}} items={mockNewOrder.items} title={mockNewOrder.title} active={activePage}/>
          </TileBlock>
          <TileBlock style={{gridColumn: "1", gridRow: "2", height: "min-content"}}>
            <Helper onClick={(v) => {setactivePage(v); console.log(v)}} items={mockNewOrderDocuments.items} title={mockNewOrderDocuments.title} active={activePage}/>
          </TileBlock>
          <TileBlock style={{gridColumn: "1", gridRow: "2", height: "min-content"}}>
            <Flex gap="1rem" padding="1rem">
              <FcDocument fontSize="3rem"/>
              <span style={{fontSize: ".9rem"}}>Методические рекомендации по заполнению проектной формы</span>
            </Flex>
          </TileBlock>
        </Flex>
      </div>
    </>
  )
}

const ExpensesPage = () => {
  return (
    <OrderSegment title='Подача заявки на грант' subtitle='Расходы'>
      <HelperMessage>
        <span>
          В данной вкладке необходимо отразить те необходимые ресурсы, которых нет ни у команды проекта, ни у партнеров, ни у спонсоров, т.е. запрашиваемую сумму проекта. Грант – это серьезное финансовое обязательство, которое имеет ряд ограничений, в частности, по допустимым направлениям расходов. <a href="">В Базу знаний за подробностями</a>
        </span>
      </HelperMessage>
      <Grid paddingTop="1rem" gap=".5rem">
        <Checkbox>Проживание и питание</Checkbox>
        <Checkbox>Транспортные расходы</Checkbox>
        <Checkbox>Аренда оборудования</Checkbox>
        <Checkbox>Аренда помещений</Checkbox>
        <Checkbox>Канцелярия</Checkbox>
        <Checkbox>Расходы на программное обеспечение</Checkbox>
        <Checkbox>Сайт / приложение</Checkbox>
        <Checkbox>Закупка оборудования</Checkbox>
        <Checkbox>Расходные материалы</Checkbox>
        <Checkbox>Расходы на связь</Checkbox>
        <Checkbox>Подарки, сувенирная продукция</Checkbox>
        <Checkbox>Информационные услуги.</Checkbox>
      </Grid>
      
    </OrderSegment>
  )
}

const CommonPage = (props: {control: any}) => {
  return (
    <>
      <OrderSegment title='Общая информация'>
      <Input
        rules={{
          ...rules.required,
        }}
        description="Название должно содержать в себе креативную и описательную части. Не должно быть слишком длинным и слишком коротким."
        name='project_name'
        control={props.control}
        label='Название проекта'
        type='text'/>

        <Input
        rules={{
          ...rules.required,
        }}
        description="Субъект РФ, в котором будет происходить реализация проекта"
        name='project_region'
        control={props.control}
        label='Регион'
        type='text'/>

        <Input
        rules={{
          ...rules.required,
        }}
        name='second_name'
        control={props.control}
        label='Масштаб проекта'
        type='text'/>
        
        <h3 style={{fontSize: ".9rem"}}>Логотип проекта</h3>
        <FileInput/>

      </OrderSegment>
      <FormSegment title='Сроки реализации'>
        <Input
        rules={{
          ...rules.required,
        }}
        description="Не ранее даты подписания Приказа об утверждении списка победителей конкурса (50 календарных дней со дня окончания приема заявок)"
        name='project_relization_start_date'
        placeHolder='__.__.____'
        control={props.control}
        label='Начало реализации проекта'
        type='date'/>

        <Input
        rules={{
          ...rules.required,
        }}
        placeHolder='__.__.____'
        description="Наступает в тот момент, когда планируется полное подведение итогов и направление отчетных документов"
        name='project_relization_end_date'
        control={props.control}
        label='Окончание реализации проекта'
        type='date'/>

        <HelperMessage style={{gridColumn: "1/3"}}>
          <span>
            В данной вкладке необходимо отразить те необходимые ресурсы, которых нет ни у команды проекта, ни у партнеров, ни у спонсоров, т.е. запрашиваемую сумму проекта. Грант – это серьезное финансовое обязательство, которое имеет ряд ограничений, в частности, по допустимым направлениям расходов. <a href="">В Базу знаний за подробностями</a>
          </span>
        </HelperMessage>
      </FormSegment>
      <OrderSegment title='Опыт руководителя'>
        <HelperMessage style={{gridColumn: "1/3"}}>
            <span>
            Укажите информацию, которая поможет экспертам конкурса убедиться, что руководитель проекта обладает достаточными знаниями, опытом и компетенциями для качественной реализации проекта.
            </span>
          </HelperMessage>
        <Input
          rules={{
            ...rules.required,
          }}
          name='project_director_post'
          control={props.control}
          label='Должность руководителя проекта'
          type='text'/>

          <Input
          rules={{
            ...rules.required,
          }}
          name='project_region_competencies'
          control={props.control}
          label='Компетенции руководителя проекта*'
          type='text'/>

      </OrderSegment>
      <OrderSegment title='Видео-визитка'>
        <HelperMessage style={{gridColumn: "1/3"}}>
            <h3>Совет</h3>
            Видео-визитка должна содержать следующую информацию: 
            <ol style={{padding: "1rem 0 1rem 1rem"}}>
              <li>Сведения о руководителе и команде проекта, масштабе реализации проекта </li>
              <li>Проблема, которая существовала на момент появления идеи проекта (проект ее решает)? </li>
              <li>Каким образом планируется решение выявленной проблемы? </li>
              <li>Что изменится в обществе/в регионе после реализации проекта? </li>
              <li>Как грант повлияет на реализацию проекта?</li>
            </ol>
            Подробнее читай в разделе «Видео визитка» в Базе знаний.
          </HelperMessage>
          
          <h3 style={{fontSize: ".9rem"}}>Логотип проекта</h3>
          <FileInput/>

      </OrderSegment>
    </>
  )
}

const FinanPage = (props: {control: any}) => {
  return (
    <>
      <OrderSegment title='Собственные средства'>
        <Input
        rules={{
          ...rules.required,
        }}
        description="Опишите виды ресурсов, на которые не требуются грантовые средства, но они необходимы для реализации проекта. Например, предоставление технического оборудования, волонтерский труд."
        name='expenses_list'
        control={props.control}
        label='Перечень расходов'
        type='text'/>
        <Input
        rules={{
          ...rules.required,
        }}
        name='expenses_sum'
        control={props.control}
        label='Сумма расходов'
        type='text'/>
      </OrderSegment>
      <OrderSegment title='Средства партнеров'>
        <HelperMessage>
          <Grid gap=".5rem">
            <p>При указании партнеров проекта необходимо приложить письма поддержки.</p>
            <p>Письма поддержки бывают 2 типов: подтверждающие материальную поддержку и подтверждающие иную поддержку.</p>
            <a href="">Шаблоны и примеры писем поддержки находятся в Базе знаний.</a>
          </Grid>
        </HelperMessage>
        <Input
        rules={{
          ...rules.required,
        }}
        name='expenses_sum'
        control={props.control}
        label='Наименование партнера'
        type='text'/>
        <Input
        rules={{
          ...rules.required,
        }}
        name='expenses_sum'
        control={props.control}
        label='Тип поддерки'
        type='text'/>
        <h3 style={{fontSize: ".9rem"}}>Письмо поддержки</h3>
        <FileInput/>
      </OrderSegment>
    </>
    
  )
}

const DocumentGarantPage = (props: {control: any}) => {
  return (
    <>
      <OrderSegment title='Собственные средства'>
      <HelperMessage>
          <Grid gap=".5rem">
            <p>При указании партнеров проекта необходимо приложить письма поддержки.</p>
            <p>Письма поддержки бывают 2 типов: подтверждающие материальную поддержку и подтверждающие иную поддержку.</p>
            <a href="">Шаблоны и примеры писем поддержки находятся в Базе знаний.</a>
          </Grid>
        </HelperMessage>
        <HelperMessage>
          <Grid gap=".5rem">
            <p>При указании партнеров проекта необходимо приложить письма поддержки.</p>
            <p>Письма поддержки бывают 2 типов: подтверждающие материальную поддержку и подтверждающие иную поддержку.</p>
            <a href="">Шаблоны и примеры писем поддержки находятся в Базе знаний.</a>
          </Grid>
        </HelperMessage>
        <h3 style={{fontSize: ".9rem"}}>Подписанный Договор о предоставлении гранта*</h3>
        <FileInput/>
      </OrderSegment>
    </>
  )
}

OrderPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}