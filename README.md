# Virtaset frontpage v.1

## Introduction 

This is a repository for Virtaset sähkösovellus frontpage

## Features 

Important features include: 

- **Seeing the current elecricity prices** - Open the app and the current electricity prices will be displayed

- **Calculate the elecricity price of your home** - Open the app and navigate to laskin tab. There you can calculate the elecricity cost of your house using preset elecricity usage or input your own

- **Seeing tomorrows elecricity prices** - Open the app and navigate to 'Huomisen hinnat' tab. Tomorrows electricity prices will be displayed

### Hinta nyt page 

- Shows the current electricity at the top
- Shows the highest, the lowest and the average electricity price of the day
- Shows todays prices in a graphic table

![Screenshot 2023-05-03 at 16 50 27](https://user-images.githubusercontent.com/104775534/235935757-c5e5f99a-e453-42ff-b556-af3e3e2ace51.png)

### Laskuri page

- Provides the user a way to calculate their electricity cost using either:
     - A basic calculator that has preset electricity usage values depending on the type of home
     - An advanced calculator where the user can input their own electricity usage     
- Two calculation options. Calculate electricity cost for 1 day or a year

### Huomisen hinta page

- If tomorrows prices have not come yet shows: 'Hinnat tulevat klo 14:00'
- Shows the highest, the lowest and the average electricity price of tomorrow
- Shows tomorrows prices in a graphic table

![Screenshot 2023-05-03 at 16 33 44](https://user-images.githubusercontent.com/104775534/235936370-9dce6cbe-acf3-45fc-996a-73d4da5ee314.png)


## Built with
- [Expo](https://expo.dev/)
- [porssisahko.net api](https://porssisahko.net/api)
- [Victory Native](https://formidable.com/open-source/victory/docs/native/)
- [Moment.js](https://momentjs.com/)

## Installation 

1. **Clone the repository**
2. **Install NPM packages**
        
        npm install

3. **Install expo go app from appstore or googleplay**
4. **Start expo client in cmd**
5. **Use expo app on android or the camera app on iphone to copy the qr code**

## Roadmap
- [x] Make a frontpage for the app where the user can view current electricity prices
- [x] Make a frontpage for the app where the user can view tomorrows electricity prices
- [x] A calculator to determine if using stock exchange electricity would be more profitable than if using fixed price contract
- [x] Shows todays highest, lowest and average price
- [x] Shows tomorrows highest, lowest and average price 

