/**
 * Created by cl-macmini-34 on 17/01/17.
 */

(function () {

    //App.constant("MY_CONSTANT",{"url" : ENV_URL} );

    App.constant("responseCode",{
        "SUCCESS": 200,
        "PARAMETER_MISSING": 100,
        "SHOW_ERROR_MESSAGE":201,
        "INVALID_ACCESS_TOKEN":401,
        "ERROR_IN_EXECUTION":404,
        "IMAGE_FILE_MISSING":102,
        "INVALID_CAR_TYPE":103,
        "INVALID_BLOCK_STATUS":104,
        "INVALID_CAR_ID":105
    });

    App.constant('APP_REQUIRES', {
        scripts: {
            'pageCtrl'              :  ['app/component/page/page.controller.js'],
            'logInCtrl'             :  ['app/component/page/login/login.controller.js'],
            'signInCtrl'            :  ['app/component/page/signin/signin.controller.js'],
            'emailVerifyCtrl'       :  ['app/component/page/email-verify/email-verify.controller.js'],
            'resetPwdCtrl'          :  ['app/component/page/reset-password/reset-password.controller.js'],
            'redirectCtrl'          :  ['app/component/page/redirect/redirect.controller.js'],
            'pageNotFoundCtrl'      :  ['app/component/page/page-not-found/page-not-found.controller.js'],

            'appCtrl'               :  ['app/component/app/app.controller.js',
                                        'app/component/app/top-bar/topbar.controller.js',
                                        'app/component/app/side-bar/sidebar.controller.js',
                                        'app/component/app/menu-bar/menu-bar.controller.js'
                                        ],
            'profileCtrl'           :  ['app/component/app/profile/profile.controller.js'],
            'userProfileCtrl'       :  ['app/component/app/user-profile/user-profile.controller.js'],
            'postJobCtrl'           :  ['app/component/app/post-job/post-job.controller.js'],
            'openJobCtrl'           :  ['app/component/app/open-job/open-job.controller.js'],
            'scheduleJobCtrl'       :  ['app/component/app/schedule-job/schedule-job.controller.js'],
            'progressJobCtrl'       :  ['app/component/app/progress-job/progress-job.controller.js'],
            'historyJobCtrl'        :  ['app/component/app/history-job/history-job.controller.js'],
            'departmentCtrl'        :  ['app/component/app/department/department.controller.js'],
            'nurseCtrl'             :  ['app/component/app/nurse/nurse-ctrl.js'],
            'contactCtrl'           :  ['app/component/app/contactUs/contactUs.controller.js'],
            'notificationCtrl'      :  ['app/component/app/notification/notification.controller.js'],
            'pendingProfileCtrl'    :  ['app/component/app/pending-profile/pending-profile.controller.js'],
            'reportCtrl'            :  ['app/component/app/report/report.js'],

            'phoneCtrl'             :  ['app/component/phone/phone.controller.js'],
            'phoneProfileCtrl'      :  ['app/component/phone/hospital/phone-profile.controller.js'],
            'phoneNurseCtrl'        :  ['app/component/phone/nurse/phone-nurse.controller.js']
        }
    })

})();