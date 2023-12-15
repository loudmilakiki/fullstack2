import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//import { createContext, useContext, useState, useReducer } from "react";
import WellcomePage from "./page/wellcome-page";
import SignupPage from "./page/signup-page";
import SigninPage from "./page/signin-page";
import RecoveryPage from "./page/recovery-page";
import RecoveryConfirmPage from "./page/recovery-confirm-page";
import SignupConfirmPage from "./page/signup-confirm-page";
import BalancePage from "./page/balance-page";
import SendPage from "./page/send-page";
import SettingsPage from "./page/settings-page";
import NotificationsPage from "./page/notifications-page";
import TransactionPage from "./page/transaction-page";
import RecivePage from "./page/recive-page";

function App() {

  return (
    // <AuthContext.Provider value={authContextData}>
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            //<AuthRoute>
            <WellcomePage />
            // </AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            //             <AuthRoute>
            <SignupPage />
            //             </AuthRoute>
          }
        />
        <Route
          path="/signup/signup-confirm"
          element={
            //             <PrivateRoute>
            <SignupConfirmPage />
            //             </PrivateRoute>
          }
        />
        <Route
          path="/signin"
          element={
            //             <AuthRoute>
            <SigninPage />
            //             </AuthRoute>
          }
        />
        <Route
          path="/signin/recovery"
          element={
            //     <AuthRoute>
            <RecoveryPage />
            //     </AuthRoute>
          }
        />
        <Route
          path="/recovery/recovery-confirm"
          element={
            // <AuthRoute>
            <RecoveryConfirmPage />
            // </AuthRoute>
          }
        />

        <Route
          path="/signin/balance"
          element={
            //     <PrivateRoute>
            <BalancePage />
            //     </PrivateRoute>
          }
        />
        <Route
          path="/signin/balance/notifications"
          element={
            //     <PrivateRoute>
            <NotificationsPage />
            //     </PrivateRoute>
          }
        />
        <Route
          path="/signin/balance/settings"
          element={
            //     <PrivateRoute>
            <SettingsPage />
            //     </PrivateRoute>
          }
        />
        <Route
          path="/signin/balance/receive"
          element={
            //     <PrivateRoute>
            <RecivePage />
            //     </PrivateRoute>
          }
        />
        <Route
          path="/signin/balance/send"
          element={
            // <PrivateRoute>
            <SendPage />
            // </PrivateRoute>
          }
        />
        <Route 
          path="/balance/transaction"
          element={
            //     <PrivateRoute>
            <TransactionPage />
            //     </PrivateRoute>
          }
        />
        {/* <Route path="*" Component={Error} />  */}
      </Routes>
    </BrowserRouter>
    // </AuthContext.Provider>
  );

}

export default App;
