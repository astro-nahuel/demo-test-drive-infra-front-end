export default {
    signIn: {
        title: 'Welcome to grooploop',
        subtitle: 'Enter with your email and password',
    },
    signInGoogle: {
        title: 'Welcome to grooploop',
        subtitle: 'Enter with your Google account',
        terms: [
            'By continuing with your Google account you accept our',
            'terms and conditions.',
        ],
    },
    emailVerified: {
        pageTitle: 'Successful registration confirmation',
        title: 'You successfully activated your account',
    },
    forgotPassword: {
        dontSentEmail: 'The mail could not be sent. Try again',
        title: 'Did you forget your password?',
    },
    passRefreshed: {
        title: 'The password has successfully been changed',
        subtitle: 'Now you have to enter with your email and your new password',
    },
    verifyAccount: {
        title: 'We have sent you a link to your email',
        subtitle:
            'Check your inbox or spam folder. There you will find a link that will allow you to finish the record.',
        sentLink: {
            label: 'Has the link not arrived?',
            button: 'Forward link',
            messageWait: 'Link sent. You can try again in 5 minutes.',
        },
    },
    errors: {
        auth: 'The data entered is incorrect. Try again',
        email: 'The email format entered is incorrect',
        password: 'The password format entered is incorrect',
        name: 'The name is required',
        matchPasswords: 'The passwords entered does not match',
    },
    labels: {
        email: 'Email',
        password: 'Password',
        rePassword: 'Repeat your password',
        name: 'Full name',
        formatPassword: `The password must have at least 8 characters, a 
       uppercase and a number`,
    },
    signUp: {
        title: 'Create an account in grooploop',
        subtitle: 'Register with your email and password',
        createAccount: 'Create Account',
        terms: ['I have read and accept the', 'terms and conditions.'],
        haveAccount: 'Do you already have an account?',
        signIn: 'Enter your account',
    },
    recoveryPassword: {
        title: 'Recover your password',
        subtitle: 'Enter your email',
        labels: {
            email: 'Email',
        },
        errors: {
            email: 'The email format entered is incorrect',
        },
        buttons: {
            send: 'Recover password',
        },
        sentLink: {
            title: 'We have sent you a link to your email',
            subtitle:
                'Check your inbox or spam folder. There you will find a link that will allow you to finish the record.',
        },
    },
}
