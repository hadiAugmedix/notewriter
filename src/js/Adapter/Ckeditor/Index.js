import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class NoteWriterCkeditor {
    constructor(settings) {
        this.settings = settings;
        this.instance = null;
    }

    startUp(callback) {
        if(typeof ClassicEditor === 'undefined') {
            throw new Error(`CK edtior is missing!`);

            return false;
        }

        ClassicEditor
            .create(document.querySelector(this.settings.element), this.settings.config)
            .then(editor => {
                this.instance = editor;

                if(typeof callback === 'function') {
                    callback.call(this, this.instance);
                }
            })
            .catch(error => {
                console.error(error);
            });

        return this;
    }

    getInstance() {
        return this.instance;
    }
}

export default NoteWriterCkeditor;
