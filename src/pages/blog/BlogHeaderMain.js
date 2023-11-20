import * as React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import {Button} from "@mui/material";

export default function BlogHeaderMain() {

    return (
        <div className={"blog__header__wrapper"}>
            <header className="blog__header">
                <div className="blog__header__logo">
                    <h3>Мастер Крылов</h3>
                    <p>Ремонт бытовой техники</p>
                </div>

                <div className="blog__header__search">
                    <input type="text" placeholder={"Поиск"}/>
                </div>

                <div className="blog__header__btns">
                    <Button variant={"primary"} startIcon={<LoginIcon/>}>Войти</Button>
                </div>

            </header>
        </div>
    );
}