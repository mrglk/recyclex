import "./Contacts.scss";
// import Worker from "../../components/Worker/Worker";
// import WorkerPhoto from "../../assets/imgs/worker.png";
// import WorkerPhotoForRetina from "../../assets/imgs/worker_2x.png";

export default function Contacts() {
    return (
        <section className="contacts container__row">
            <h1 className="contacts__header">Контакты</h1>
            <div className="contacts__info">
                <div className="contacts__city contacts__column">
                    <span className="contacts__subtitle contacts__subtitle_bigger">Россия</span>
                </div>
                <div className="contacts__address contacts__column">
                    <span className="contacts__subtitle">Адрес</span>
                    <span className="contacts__description contacts__adress">Москва,<br/>Пресненская набережная д. 12, офис 405, помещ. 3</span>
                </div>
                <div className="contacts__contacts contacts__column">
                    <span className="contacts__subtitle">Для связи</span>
                    <div className="contacts__numbers contacts__description">
                        <a href="tel:+78003330816">+7 (800) 333-08-16</a>
                    </div>
                </div>
                <div className="contacts__director contacts__column">
                    <span className="contacts__subtitle contacts__description">Директор</span>
                    <span>Коверда <br className="contacts__tablet_hidden"/>Вадим Николаевич</span>
                </div>
            </div>
            <div className="contacts__mapWrapper">
            <iframe className="contacts__map"  title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5081828838265!2d37.53745771007338!3d55.74967387708095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdcbfd1b72d%3A0x433d48214f76b256!2z0J_RgNC10YHQvdC10L3RgdC60LDRjyDQvdCw0LEuLCAxMiwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEyMzMxNw!5e0!3m2!1sru!2sge!4v1669406101341!5m2!1sru!2sge" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* <div className="contacts__workers">
                <Worker
                position='Главный специалист отдела закупок и контроля затрат'
                surname='Иванова'
                name='Алиса Ивановна'
                phone='+7(495) 783-35-34'
                email='AASirotenko@vtbf.ru'
                src={WorkerPhoto}
                srcRetina={WorkerPhotoForRetina}/>
                <Worker
                position='Главный специалист отдела закупок и контроля затрат'
                surname='Иванова'
                name='Алиса Ивановна'
                phone='+7(495) 783-35-34'
                email='AASirotenko@vtbf.ru'
                src={WorkerPhoto}
                srcRetina={WorkerPhotoForRetina}/>
            </div> */}
        </section>
    );
}



