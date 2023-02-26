import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/ui/Button';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to Accept!</p>
    </Modal>
  );
  return (
    <div className="relative">
      <Button primary onClick={() => setShowModal(!showModal)}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        iusto sapiente, aspernatur voluptas est adipisci veniam perferendis qui
        nulla quos, earum et laborum voluptatem temporibus repudiandae maiores
        nihil non dolorum in tempore amet nesciunt. Illum, ipsum? Qui magni
        obcaecati sapiente doloribus delectus molestiae dolores eligendi ipsa
        animi illum officiis ipsum, eveniet modi quia. Pariatur ut, repudiandae
        laborum natus sit dolores eaque aut sapiente. Sit, sapiente. Ipsum hic
        ad suscipit tenetur qui minima fugiat blanditiis explicabo fuga. Ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        iusto sapiente, aspernatur voluptas est adipisci veniam perferendis qui
        nulla quos, earum et laborum voluptatem temporibus repudiandae maiores
        nihil non dolorum in tempore amet nesciunt. Illum, ipsum? Qui magni
        obcaecati sapiente doloribus delectus molestiae dolores eligendi ipsa
        animi illum officiis ipsum, eveniet modi quia. Pariatur ut, repudiandae
        laborum natus sit dolores eaque aut sapiente. Sit, sapiente. Ipsum hic
        ad suscipit tenetur qui minima fugiat blanditiis explicabo fuga. Ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        iusto sapiente, aspernatur voluptas est adipisci veniam perferendis qui
        nulla quos, earum et laborum voluptatem temporibus repudiandae maiores
        nihil non dolorum in tempore amet nesciunt. Illum, ipsum? Qui magni
        obcaecati sapiente doloribus delectus molestiae dolores eligendi ipsa
        animi illum officiis ipsum, eveniet modi quia. Pariatur ut, repudiandae
        laborum natus sit dolores eaque aut sapiente. Sit, sapiente. Ipsum hic
        ad suscipit tenetur qui minima fugiat blanditiis explicabo fuga. Ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        iusto sapiente, aspernatur voluptas est adipisci veniam perferendis qui
        nulla quos, earum et laborum voluptatem temporibus repudiandae maiores
        nihil non dolorum in tempore amet nesciunt. Illum, ipsum? Qui magni
        obcaecati sapiente doloribus delectus molestiae dolores eligendi ipsa
        animi illum officiis ipsum, eveniet modi quia. Pariatur ut, repudiandae
        laborum natus sit dolores eaque aut sapiente. Sit, sapiente. Ipsum hic
        ad suscipit tenetur qui minima fugiat blanditiis explicabo fuga. Ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        iusto sapiente, aspernatur voluptas est adipisci veniam perferendis qui
        nulla quos, earum et laborum voluptatem temporibus repudiandae maiores
        nihil non dolorum in tempore amet nesciunt. Illum, ipsum? Qui magni
        obcaecati sapiente doloribus delectus molestiae dolores eligendi ipsa
        animi illum officiis ipsum, eveniet modi quia. Pariatur ut, repudiandae
        laborum natus sit dolores eaque aut sapiente. Sit, sapiente. Ipsum hic
        ad suscipit tenetur qui minima fugiat blanditiis explicabo fuga. Ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        iusto sapiente, aspernatur voluptas est adipisci veniam perferendis qui
        nulla quos, earum et laborum voluptatem temporibus repudiandae maiores
        nihil non dolorum in tempore amet nesciunt. Illum, ipsum? Qui magni
        obcaecati sapiente doloribus delectus molestiae dolores eligendi ipsa
        animi illum officiis ipsum, eveniet modi quia. Pariatur ut, repudiandae
        laborum natus sit dolores eaque aut sapiente. Sit, sapiente. Ipsum hic
        ad suscipit tenetur qui minima fugiat blanditiis explicabo fuga. Ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        iusto sapiente, aspernatur voluptas est adipisci veniam perferendis qui
        nulla quos, earum et laborum voluptatem temporibus repudiandae maiores
        nihil non dolorum in tempore amet nesciunt. Illum, ipsum? Qui magni
        obcaecati sapiente doloribus delectus molestiae dolores eligendi ipsa
        animi illum officiis ipsum, eveniet modi quia. Pariatur ut, repudiandae
        laborum natus sit dolores eaque aut sapiente. Sit, sapiente. Ipsum hic
        ad suscipit tenetur qui minima fugiat blanditiis explicabo fuga. Ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        iusto sapiente, aspernatur voluptas est adipisci veniam perferendis qui
        nulla quos, earum et laborum voluptatem temporibus repudiandae maiores
        nihil non dolorum in tempore amet nesciunt. Illum, ipsum? Qui magni
        obcaecati sapiente doloribus delectus molestiae dolores eligendi ipsa
        animi illum officiis ipsum, eveniet modi quia. Pariatur ut, repudiandae
        laborum natus sit dolores eaque aut sapiente. Sit, sapiente. Ipsum hic
        ad suscipit tenetur qui minima fugiat blanditiis explicabo fuga. Ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        iusto sapiente, aspernatur voluptas est adipisci veniam perferendis qui
        nulla quos, earum et laborum voluptatem temporibus repudiandae maiores
        nihil non dolorum in tempore amet nesciunt. Illum, ipsum? Qui magni
        obcaecati sapiente doloribus delectus molestiae dolores eligendi ipsa
        animi illum officiis ipsum, eveniet modi quia. Pariatur ut, repudiandae
        laborum natus sit dolores eaque aut sapiente. Sit, sapiente. Ipsum hic
        ad suscipit tenetur qui minima fugiat blanditiis explicabo fuga. Ipsam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        iusto sapiente, aspernatur voluptas est adipisci veniam perferendis qui
        nulla quos, earum et laborum voluptatem temporibus repudiandae maiores
        nihil non dolorum in tempore amet nesciunt. Illum, ipsum? Qui magni
        obcaecati sapiente doloribus delectus molestiae dolores eligendi ipsa
        animi illum officiis ipsum, eveniet modi quia. Pariatur ut, repudiandae
        laborum natus sit dolores eaque aut sapiente. Sit, sapiente. Ipsum hic
        ad suscipit tenetur qui minima fugiat blanditiis explicabo fuga. Ipsam.
      </p>
    </div>
  );
};

export default ModalPage;
