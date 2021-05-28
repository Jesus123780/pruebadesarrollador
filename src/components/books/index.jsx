import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { GET_COURSES } from '../../gql/cursos';
import { GET_BOOKS } from '../../gql/libros';
import { AwesomeModal } from '../AwesomeModal';
import { Loading } from '../Loading';
import { ShadowCard } from '../ShadowCard'
import { Container, Card } from './styled';
import { InputFiles } from '../InputFiles/index'
import { useLocation } from 'react-router-dom'

export const Books = () => {
    const location = useLocation()
    const [modal, setModal] = useState(false)
    // const [file, setFile] = useState(false)

    // const onSubmit = e => {
    //     e.preventDefault()
    //     fetch.
    // }

    const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
    }
  }  
`
    const { data, loading, error } = useQuery(GET_COURSES);
    const [getBooks, { data: dataBooks, loading: loadBooks, error: errBooks }] = useLazyQuery(GET_BOOKS)
    const [uploadFile] = useMutation(UPLOAD_FILE, {
        onCompleted: datafile => console.log(datafile)
    })
    const handleFileChange = e => {
        const file = e.target.files[0]
        if (!file) return
        uploadFile({ variables: { file } })
    }
    return (
        <Container>{console.log(location?.pathname)}
            <InputFiles />
            <Card>
                <ShadowCard>
                    {!!((loading && !error) || (loading && !error)) && <Loading/>}
                    {data?.courses?.map(courses => <span key={courses.id}>{courses.title}<br />{courses.description}<br />{courses.description}<br />{courses.topic}</span>)}
                    <h1>lista de libros</h1>

                    <button onClick={() => getBooks()}>obtener libros</button>

                    {!!((loading && !error) || (loadBooks && !errBooks)) && <Loading/>}
                    {dataBooks?.books?.map(books => <span key={books.id}>{books.description}, {books.title}<br /></span>)}
                    <AwesomeModal title='NUEVO REGISTRO' show={modal} onHidde={() => setModal(false)} height='auto' hiddeOnConfirm={false} timeOut={280} footer={false} header={true}>
                        <h1>Hola</h1>
                    </AwesomeModal>
                </ShadowCard>
            </Card>
            <Card>
                <ShadowCard title='Subir img'>
                    <div>
                        <input type="file" onChange={e => {
                            const file = e.target.files[0];
                            // setFile(file)
                            console.log(file)
                        }}></input>
                    </div>
                    {/* <button onClick={onSubmit}>Enviar</button> */}
                </ShadowCard>
            </Card>
            <Card>
                <ShadowCard>
                    <h1>SUBIR FILE</h1>
                    <input type="file" onChange={handleFileChange} name="" id="" />
                </ShadowCard>
            </Card>
        </Container>
    )
}
// use useLazyQuery se ejecuta cuando espera una acción