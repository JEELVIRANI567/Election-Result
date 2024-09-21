import React from "react";
import Chart from "react-apexcharts";

export default function Trends() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <h3>Welcome to piechart</h3>
                <Chart
                    type="pie"
                    width={1349}
                    height={550}
                    series={[120, 80, 50, 30]}
                    options={{
                        labels: ["Bharatiya Janata Party", "Indian National Congress", "Aam Aadmi Party", "Dravida Munnetra Kazhagam"]
                    }}
                />
            </div>
        </React.Fragment>
    );
}
