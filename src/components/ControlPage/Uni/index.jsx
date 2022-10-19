import { LateralNav } from '../../LateralNav';
import './styles.css';

export const Uni = () => {
    return(
        <div className="uni-container">
            <LateralNav/>
            <div className="uni-content">
                <h1>Uni</h1>
                <p>
                    Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
                    Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget
                    rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec
                    molestie. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                </p>
                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
        </div>
    )
}