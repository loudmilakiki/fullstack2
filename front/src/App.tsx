import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//import { createContext, useContext, useState, useReducer } from "react";
import WellcomePage from "./page/wellcome-page";
//import SignupPage from "./page/signup-page";
import SigninPage from "./page/signin-page";
import RecoveryPage from "./page/recovery-page";
//import SignupConfirmPage from "./page/signup-confirm-page";

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
        {/* <Route
          path="/signup"
          element={
            //             <AuthRoute>
            <SignupPage />
            //             </AuthRoute>
          }
        /> */}
        {/* <Route
          path="/signup/signup-confirm"
          element={
            //             <PrivateRoute>
            <SignupConfirmPage />
            //             </PrivateRoute>
          }
        /> */}
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
        {/* // <Route
          //   path="/recovery-confirm"
          //   element={
          //     <AuthRoute>
          //       <RecoveryConfirmPage />
          //     </AuthRoute>
          //   }
          // />
          // <Route
          //   path="/balance"
          //   element={
          //     <PrivateRoute>
          //       <BalancePage />
          //     </PrivateRoute>
          //   }
          // />
          // <Route
          //   path="/notifications"
          //   element={
          //     <PrivateRoute>
          //       <NotificationsPage />
          //     </PrivateRoute>
          //   }
          // />
          // <Route
          //   path="/settings"
          //   element={
          //     <PrivateRoute>
          //       <SettingsPage />
          //     </PrivateRoute>
          //   }
          // />
          // <Route
          //   path="/recive"
          //   element={
          //     <PrivateRoute>
          //       <RecivePage />
          //     </PrivateRoute>
          //   }
          // />
          // <Route
          //   path="/send"
          //   element={
          //     <PrivateRoute>
          //       <SendPage />
          //     </PrivateRoute>
          //   }
          // />
          // <Route
          //   path="/transaction/:transactionId"
          //   element={
          //     <PrivateRoute>
          //       <TransactionPage />
          //     </PrivateRoute>
          //   }
          // />
          // <Route path="*" Component={Error} /> */}
      </Routes>
    </BrowserRouter>
    // </AuthContext.Provider>
  );

}

export default App;
