export default {
    btnContinueFree: 'Continuar gratis',
    btnEnter: 'Ingresar',
    navbar: {
        userAuth: 'Ingresa a la app',
    },
    btnContinueGoogle: 'Continuar con Google',
    btnContinueEmail: 'Continuar con correo electrónico',
    btnEdit: 'Editar',
    btnDelete: 'Eliminar',
    btnCancel: 'Cancelar',
    deleteMessageGlobal: (entity: string) =>
        `¿Quieres eliminar este ${entity} ?`,
    deleteFeedbackSnackbar: (entity: string) =>
        `El ${entity} se ha eliminado de forma exitosa`,
    errorMessageGlobal: 'Ha ocurrido un error inesperado',
    share: {
        linkCopied: 'Link copiado al portapapeles',
        title: 'Enlace para compartir el ',
        actions: ['Copiar', 'Compartir'],
        errorMessage: 'Ha ocurrido un error al copmartir el link',
        content: {
            text: `Me gustaría saber tu respuesta.\nPara eso, debes acceder a Grooploop a través del link\`,
          'No te tomará más de un minuto.`,
        },
    },
    googleAutocomplete: {
        labels: { ubication: 'Ubicación' },
    },
    hourPicker: {
        labels: { hour: 'Hora' },
    },
    datePicker: {
        labels: { date: 'Fecha' },
    },
    imageUpload: {
        labels: { upload: 'Subir imagen' },
        errorMessage: 'Ha ocurrido un error al subir la imagen',
    },
    bottomBarNav: {
        home: 'Inicio',
        notifications: 'Notificaciones',
        settings: 'Ajustes',
    },
    homeTab: {
        your: 'Tus',
    },
    loopsCard: {
        createdBy: 'Creado por ',
        createdByMe: 'Creado por mi',
    },
    floatBtn: {
        create: 'Crear',
    },
}
