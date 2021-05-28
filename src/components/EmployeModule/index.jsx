import React, { useState } from 'react'
import { HeaderC } from '../HeaderStore'
import { Footer } from '../Footer'
import { useMutation, useQuery } from '@apollo/client'
import { GET_EMPLOYEES, UPDATE_EMPLOYEES } from '../../gql/employees'
import { Loading } from '../Loading'
import styled from 'styled-components'
import { APColor } from '../../assets/colors'
import { AwesomeModal } from '../AwesomeModal/index'
import { ButtonHook } from '../../components/ButtonHooks'
import InputHooks from '../InputHooks/InputHooks'

export const Index = () => {
    const { data, loading, error } = useQuery(GET_EMPLOYEES);
    const [modal, setModal] = useState(false)
    const handleClick = () => {
        setModal(!modal)
    }

    // Funciones para registrar
    const [register] = useMutation(UPDATE_EMPLOYEES)
    const [values, setValues] = useState({})
    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const [addEmploye, NewEmploye]= useMutation(UPDATE_EMPLOYEES, {
        update(cache, { data: newEmployee }){
            const datae = cache.readQuery({ query: UPDATE_EMPLOYEES });
            cache.writeQuery({
                query: UPDATE_EMPLOYEES,
                data: { allEmployees: [newEmployee, ...datae?.employees] }
            })
        }
    });
    console.log(addEmploye)
    const handleRegister = async e => {
        e.preventDefault()
        const { cedula, nombres, apellidos, telefono, celular, email, direccion } = values
        try {
            const results = await register({
                variables: {
                    input: {
                        cedula,
                        nombres,
                        apellidos,
                        telefono,
                        celular,
                        email,
                        direccion,

                    }
                }
            })
            console.log(results)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <HeaderC />
            <button onClick={NewEmploye}>click</button>
            {!!((loading && !error) || (loading && !error)) && <Loading />}
            <Text>Tabla de empleados</Text>
            <Table>
                <Tbody>
                    <Thead>
                        <tr>
                            <Th>Id</Th>
                            <Th>Cedula</Th>
                            <Th>Nombres</Th>
                            <Th>Apellidos</Th>
                            <Th>Teléfono</Th>
                            <Th>Celular</Th>
                            <Th>Email</Th>
                            <Th>Dirección</Th>
                            <Th>Acción</Th>
                        </tr>
                    </Thead>
                    { data?.employee.length ? data?.employee?.map((employe, i) => (

                        <tr key={employe}>
                            <Td>{i + 1}</Td>
                            <Td>{employe?.cedula}</Td>
                            <Td>{employe?.nombres}</Td>
                            <Td>{employe?.apellidos}</Td>
                            <Td>{employe?.telefono}</Td>
                            <Td>{employe?.celular}</Td>
                            <Td>{employe?.email}</Td>
                            <Td>{employe?.direccion}</Td>
                            <Td>
                                <Button >Eliminar</Button>
                                <Button color={APColor}>editar</Button>
                            </Td>
                        </tr>)): <span>No hay resultados en la base de datos</span>}
                </Tbody>
            </Table>
            <ButtonHook Ripple padding='20px' align='center' onClick={()=>handleClick()}>Agregar empleados</ButtonHook>
            <AwesomeModal
                show={modal}
                backdrop
                onCancel={() => setModal(false)}
                onHide={() => setModal(false)}
                btnConfirm={false}
                header={false}
                footer={false}
            >
                <form onSubmit={handleRegister}>
                    <h1>Agregar empleados</h1>
                    <Text>¿No tienes cuenta?
                    </Text>
                    <InputHooks
                        title='cedula'
                        required
                        type="text"
                        errors={values?.cedula}
                        value={values?.cedula}
                        onChange={handleChange}
                        name='cedula'
                        range={{ min: 0, max: 8 }}

                    />
                    <InputHooks
                        title='Nombre'
                        required
                        type="text"
                        errors={values?.nombres}
                        value={values?.nombres}
                        onChange={handleChange}
                        name='nombres'
                        range={{ min: 0, max: 20 }}

                    />
                    <InputHooks
                        title='Apellidos'
                        required
                        type="text"
                        errors={values?.apellidos}
                        value={values?.apellidos}
                        onChange={handleChange}
                        name='apellidos'
                        range={{ min: 0, max: 20 }}

                    />
                    <InputHooks
                        title='teléfono'
                        required
                        type="text"
                        errors={values?.telefono}
                        value={values?.telefono}
                        onChange={handleChange}
                        name='telefono'
                        range={{ min: 0, max: 8 }}

                    />
                    <InputHooks
                        title='celular'
                        required
                        type="text"
                        numeric
                        errors={values?.celular}
                        value={values?.celular}
                        onChange={handleChange}
                        name='celular'
                        range={{ min: 0, max: 8 }}
                    />
                    <InputHooks
                        title='email'
                        required
                        type="text"
                        email
                        errors={values?.email}
                        value={values?.email}
                        onChange={handleChange}
                        name='email'
                        range={{ min: 0, max: 190 }}

                    />
                    <InputHooks
                        title='direccion'
                        required
                        type="text"
                        errors={values?.direccion}
                        value={values?.direccion}
                        onChange={handleChange}
                        name='direccion'
                        range={{ min: 0, max: 120 }}
                    />
                    <ButtonHook textAlign='center' justify='center' display='flex' Ripple padding='20px' align='center' type='submit'>Agregar empleados</ButtonHook>
                </form>
            </AwesomeModal>
            <Footer />
        </>
    )
}
const Tbody = styled.tbody`
    border: 1px solid #ccc;
    
`
const Table = styled.table`
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
`
const Text = styled.h1`
    text-align: center;
`
const Th = styled.th`
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ccc;
`
const Td = styled.th`
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
`

const Thead = styled.thead`
    padding: 10px;
    text-align: center;
`
// Botones
const Button = styled.thead`
    color: #fff;
    background-color: ${ ({ color }) => color ? color : 'red' };
    margin: 0px 8px;
    cursor: pointer;
`