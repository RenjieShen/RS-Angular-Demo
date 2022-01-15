import express from "express";

const router = express.Router();

router.get('/api/cars', (req, res, next) => {
  const cars = [
    {
      id: 285,
      model: '2021 Audi Q4 e-tron 45 82 kWh (265 Hp) quattro',
      color: 'red',
      sold: false
    },
    {
      id: 12,
      model: '2021 Chevrolet Groove 1.5 MPI (112 Hp) CVT',
      color: 'oceanblue',
      sold: false
    },
    {
      id: 55,
      model: '2021 Chevrolet Groove 1.5 MPI (112 Hp)',
      color: 'black',
      sold: false
    },
    {
      id: 11,
      model: '2017 Lada Vesta SW Cross 1.6 (106 Hp) Automatic',
      color: 'white',
      sold: true
    },
    {
      id: 52,
      model: '2022 Toyota Yaris (XP210) GRMN 1.6 (272 Hp)',
      color: 'white',
      sold: false
    },
    {
      id: 65,
      model: '2018 Chevrolet Spin (facelift 2018) 1.8i (105 Hp) Automatic',
      color: 'white',
      sold: true
    },
    {
      id: 760,
      model: '2022 Volkswagen Multivan (T7) Long',
      color: 'black',
      sold: false
    },
    {
      id: 2108,
      model: '2004 Toyota Avensis Verso (facelift 2003)',
      color: 'skyblue',
      sold: true
    },
    {
      id: 568,
      model: '2017 Kia Carens III (facelift 2016)',
      color: 'green',
      sold: false
    },
    {
      id: 3,
      model: '1982 Porsche 944 2.5 (163 Hp) Automatic',
      color: 'sliver',
      sold: true
    },
    {
      id: 195,
      model: '2019 Chevrolet Tracker (2019) 325T Ecotec (125 Hp) DSS',
      color: 'black',
      sold: false
    }
  ];

  res.status(200).json(cars)
});

export default router;