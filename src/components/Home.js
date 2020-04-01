import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import UserList from "./UserList";
import { Container, Typography, Button, Grid } from "@material-ui/core";

function createData(id, fname, lname, email, status) {
    return { id, fname, lname, email, status };
}

class Home extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    render() {
        const rows = [
            createData(1, 'Olive', 'Yew', 'oliveyew@mailinator.com', 'Active'),
            createData(2, 'Aida', 'Bugg', 'aidabugg@mailinator.com', 'Inactive'),
            createData(3, 'Peg', 'Legge', 'peglegge@mailinator.com', 'Active'),
            createData(4, 'Liz', 'Erd', 'lizerd@mailinator.com', 'Active'),
            createData(5, 'Ray', 'Sin', 'raysin@mailinator.com', 'Pending'),
            createData(6, 'Rita', 'Book', 'ritabook@mailinator.com', 'Active'),
            createData(7, 'Anita', 'Bath', 'anitabath@mailinator.com', 'Inactive'),
            createData(8, 'Dee', 'End', 'deeend@mailinator.com', 'Active'),
        ];

        return (
            <Container style={{ marginTop: '10px' }} fixed>
                <Grid container spacing={5}>
                    <Grid item xs={9}>
                        <Typography variant="h3" component="h3">Users</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Button style={{ float: 'right' }}
                            onClick={this.handleLogout}
                            variant="contained">Logout</Button>
                    </Grid>
                </Grid>
                <UserList rows={rows} />
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
}

export default connect(mapStateToProps)(Home);
