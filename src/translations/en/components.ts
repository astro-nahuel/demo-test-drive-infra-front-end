export default {
    btnContinueFree: 'Start free',
    btnEnter: 'Enter',
    navbar: {
        userAuth: 'Sign up',
    },
    btnContinueGoogle: 'Continue with Google',
    btnContinueEmail: 'Continue with email',
    btnEdit: 'Edit',
    btnDelete: 'Delete',
    btnCancel: 'Cancel',
    deleteMessageGlobal: (entity: string) =>
        `¿Do you want to delete this ${entity} ?`,
    deleteFeedbackSnackbar: (entity: string) =>
        `The ${entity} has been eliminated successfully`,
    errorMessageGlobal: 'An unexpected error has occurred',
    share: {
        linkCopied: 'Link copied to clipboard',
        title: 'Link to share the',
        actions: ['Copy', 'Share'],
        errorMessage: 'An error has occurred sharing the link',
        content: {
            text: [
                `I would like to know your answer.\nFor that, you must access Grooploop through the\n`,
                'It will not take more than a minute.',
            ],
        },
    },
    googleAutocomplete: {
        labels: { ubication: 'Location' },
    },
    hourPicker: {
        labels: { hour: 'Hour' },
    },
    datePicker: {
        labels: { date: 'Date' },
    },
    imageUpload: {
        labels: { upload: 'Upload image' },
        errorMessage: 'An error has occurred uploading the image',
    },
    bottomBarNav: {
        home: 'Home',
        notifications: 'Notifications',
        settings: 'Settings',
    },
    homeTab: {
        your: 'Your',
    },
    loopsCard: {
        createdBy: 'Created by ',
        createdByMe: 'Created by me',
    },
    floatBtn: {
        create: 'Create',
    },
}
