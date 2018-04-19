import NoteWriterCkeditor from './Adapter/Ckeditor/Index';

class NoteWriter {
    init() {
        this.instance = null;
        this.settings = {
            element: '#editor',
            config: {
                toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'undo', 'redo' ]
            }
        };

        this.adapter = new NoteWriterCkeditor(this.settings);

        this.bootstrap();
    }

    bootstrap() {
        this.adapter.startUp(editor => {
            this.instance = editor;
        });
    }
}

export default NoteWriter;
