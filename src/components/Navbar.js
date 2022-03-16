
import React from 'react';
import { Home } from './Home';
import WorkoutsContainer from '../containers/WorkoutsContainer';
import PlannersContainer from '../containers/PlannersContainer';
import GraveyardContainer from '../containers/GraveyardContainer';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';


const Navbar = () => {
    return(
        <div className='navbar'>
            <MemoryRouter>
                <Container className='p-3'>
                    <Container className='p-5 mb-4 bg-light rounded-3'>
                        {/* Routes == Switch */}
                        <Routes>
                            <Route path='/' element={<Home/>} />
                            <Route path='/planners' element={<PlannersContainer/>} />
                            <Route path='/workouts' element={<WorkoutsContainer/>} />
                            <Route path='/graveyard' element={<GraveyardContainer/>} />
                        </Routes>
                        {/* Routes == Switch */}
                        <ButtonToolbar className='custom-btn-toolbar fixed-top'>
                            <LinkContainer to='/'>
                                <Button>Home</Button>
                            </LinkContainer>
                            <LinkContainer to='/planners'>
                                <Button>Planners</Button>
                            </LinkContainer>
                            <LinkContainer to='/workouts'>
                                <Button>Workouts</Button>
                            </LinkContainer>
                            <LinkContainer to='/graveyard'>
                                <Button>Completed Workouts</Button>
                            </LinkContainer>
                        </ButtonToolbar>
                    </Container>
                </Container>
            </MemoryRouter>
        </div>
    )
}

export default Navbar