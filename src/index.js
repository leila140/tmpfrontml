import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import SingUp from './Component/SingUp'
import App from './App';
import './BgVideo.css';
import ReactGA from 'react-ga4'

import reportWebVitals from './reportWebVitals';

import store from "./store";
import { Provider } from "react-redux";
import Portfolio from './Component/Profile/Portfolio';
import AdminstrationP from './Component/Profile/AdminstrationP'
import AutoMotiveP from './Component/Profile/AutoMotiveP'
import BeautyP from './Component/Profile/BeautyP'
import HealthP from './Component/Profile/HealthP'
import HobbiesP from './Component/Profile/HobbiesP'
import RestaurantsP from './Component/Profile/RestaurantsP'
import ServicesP from './Component/Profile/ServicesP'
import ShoppingP from './Component/Profile/ShoppingP'
import TransportP from './Component/Profile/TransportP'
import Dashboard from './dashboard/pages/Dashbord';
import GenreForm from './dashboard/pages/GenreForm';
import BusinessForm from './dashboard/pages/BusinessEdit';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Component/Navbar';
import ProfilePage from './Pages/ProfileUser';
import ListResidence from './Pages/listes/ListResidence';
import Travelagency from './Pages/listes/Travelagency';
import ListClothes from './Pages/listes/ListClothes';
import ListCosProd from './Pages/listes/ListCosProd';
import ListMarket from './Pages/listes/ListMarket';
import ListGyme from './Pages/listes/ListGyme';
import ListeHotel from './Pages/listes/listeHotel';
import ListHopitale from './Pages/listes/ListHopitale';
import ListPharma from './Pages/listes/ListPharma';
import ListClinique from './Pages/listes/ListClinique';
import ListCabinet from './Pages/listes/ListCabinet';
import ListRegioncentre from './Pages/listes/ListRegiocentre';
import ListTribinaux from './Pages/listes/ListTribinaux';
import ListMedia from './Pages/listes/ListMedia';
import ListEducation from './Pages/listes/ListEducation';
import ListPublic from './Pages/listes/ListPublic';
import ListPostal from './Pages/listes/ListPostal';
import ListRistaurant from './Pages/listes/ListRistaurant';
import ListCaffe from './Pages/listes/ListCaffe';
import ListSalone from './Pages/listes/ListSalone';
import ListSpa from './Pages/listes/ListSpa';
import ListCarRental from './Pages/listes/ListCaRental';
import ListMicanique from './Pages/listes/ListMicanique';
import ListWaching from './Pages/listes/ListWaching';
import ListBus from './Pages/listes/ListBus';
import ListTaxi from './Pages/listes/ListTaxi';
import ListStation from './Pages/listes/ListStation';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import ListElectronic from './Pages/listes/ListElectronic';
import ListOther from './Pages/listes/ListOther';
import BankList from './Pages/listes/ListBanc';
import MediaList from './Pages/listes/ListMedia';
import EducationList from './Pages/listes/ListEducation';
import PublicList from './Pages/listes/ListPublic';



const queryClient = new QueryClient();

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
});




const root = ReactDOM.createRoot(document.getElementById('root'));

ReactGA.initialize("G-M5ZMJTLM92");
root.render(


  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="/public/vd1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>

      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Navbar />

            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/singUp" element={<SingUp />} />
              <Route path="/profile" element={<ProfilePage />} />

              {/*  ---dashbord routes--- */}
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/business' element={<BusinessForm />} />
              <Route path='/business/:id' element={<BusinessForm />} />
              <Route path="/genre" element={<GenreForm />} />



              <Route path='/portfolio/:businessId' element={<Portfolio />} />
              <Route path='/AdminstrationP/:adminstrationItem' element={<AdminstrationP />} />
              <Route path='/AutoMotiveP/:autoMotiveItem' element={<AutoMotiveP />} />
              <Route path='/BeautyP/:beautyItem' element={<BeautyP />} />
              <Route path='/HealthP/:healthItem' element={<HealthP />} />
              <Route path='/HobbiesP/:hobbiesItem' element={<HobbiesP />} />
              <Route path='/RestaurantsP/:restoItem' element={<RestaurantsP />} />
              <Route path='/ServicesP/:restaurantsItem' element={<ServicesP />} />
              <Route path='/ShoppingP/:shoppingItem' element={<ShoppingP />} />
              <Route path='/TransportP/:transportItem' element={<TransportP />} />
              <Route path='Hotel' element={<ListeHotel />} />
              <Route path='/Residence' element={<ListResidence />} />
              <Route path='/travelagen' element={<Travelagency />} />
              <Route path='/cloth' element={<ListClothes />} />
              <Route path='/cosprod' element={<ListCosProd />} />
              <Route path='/supmark' element={<ListMarket />} />
              <Route path='electronic' element={<ListElectronic />} />
              <Route path='/game' element={<ListGyme />} />
              <Route path='/Hôpital' element={<ListHopitale />} />
              <Route path='/Pharma' element={<ListPharma />} />
              <Route path='/clini' element={<ListClinique />} />
              <Route path='/cabinet' element={<ListCabinet />} />
              <Route path='/regiocentre' element={<ListRegioncentre />} />
              <Route path='/tribi' element={<ListTribinaux />} />
              <Route path='/Banc' element={<BankList />} />
              <Route path='/media' element={<MediaList />} />
              <Route path='/educ' element={<EducationList />} />
              <Route path='/pub' element={<PublicList/>} />
              <Route path='/post' element={<ListPostal />} />
              <Route path='/resto' element={<ListRistaurant />} />
              <Route path='/café' element={<ListCaffe />} />
              <Route path='/salon' element={<ListSalone />} />
              <Route path='/spa' element={<ListSpa />} />
              <Route path='/carental' element={<ListCarRental />} />
              <Route path='/mecan' element={<ListMicanique />} />
              <Route path='/wash' element={<ListWaching />} />
              <Route path='/bus' element={<ListBus />} />
              <Route path='/taxi' element={<ListTaxi />} />
              <Route path='/station' element={<ListStation />} />
              <Route path='/other' element={<ListOther/>} />

            </Routes></QueryClientProvider>
        </Provider>

      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
const SendAnalytics = ()=> {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}
  reportWebVitals(SendAnalytics);

