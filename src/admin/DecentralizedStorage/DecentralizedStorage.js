import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BiSlider } from "react-icons/bi";
import { toast } from 'react-toastify';
import Button from '../components/ui/button';
import Input from '../components/ui/input';
import Modal from '../components/ui/modal';
import ButtonUpload from './_components/ButtonUpload';
import { Progress, Typography } from '@material-tailwind/react';


const filterOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Older', value: 'oldest' },
  { label: 'Larger', value: 'larger' },
  { label: 'Minor', value: 'minor' },
];

const DecentralizedStorage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [filter, setFilter] = useState(filterOptions[0].value);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    image: true,
    pdf: true,
    doc: true,
  });
  const [uploads, setUploads] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUpload, setSelectedUpload] = useState(null);

  const handleImageSelected = (imageData, name) => {
    setImage(imageData);
    setFileName(name);
  };

const demo = 10

  const saveUpload = () => {
    const newUpload = {
      image,
      fileName,
      date: new Date().toISOString(),
    };
    setUploads([...uploads, newUpload]);
    toast('Upload saved');
    setImage(null);
    setFileName('');
  };

  const cancelUpload = () => {
    setImage(null);
    setFileName('');
    toast('Upload canceled');
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    toast(`Filter changed to: ${event.target.value}`);
  };

  const toggleCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };

  const openModal = (upload) => {
    setSelectedUpload(upload);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUpload(null);
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    const fileExtension = selectedUpload.fileName.split('.').pop();
    const updatedFileName = `${value}.${fileExtension}`;
    setSelectedUpload({ ...selectedUpload, [name]: updatedFileName });
  };

  const saveEdit = () => {
    setUploads(uploads.map(upload => (upload === selectedUpload ? selectedUpload : upload)));
    toast('Upload updated');
    closeModal();
  };

  const deleteUpload = () => {
    setUploads(uploads.filter(upload => upload !== selectedUpload));
    toast('Upload deleted');
    closeModal();
  };

  return (
    <section className="container mx-auto w-full text-white py-5">
      <div className="flex flex-col">
        <div className="py-5">
          <h1 className="text-4xl pb-14 font-bold">Decentralized Storage</h1>
          <p className="font text-lg tracking-wide">
            Easily upload files to Shadow Drive, 1GB of storage included
          </p>
        </div>
        {/* Upload button/status */}
        <div className="flex w-full  gap-x-5">
          {!image && <div className='w-1/2'><ButtonUpload onImageSelected={handleImageSelected} /></div> }
          {image && (
            <div className="flex flex-row gap-x-5 justify-between">
              <div className="flex relative w-52 h-56 border border-white rounded-xl mx-auto">
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-full absolute top-0 left-0 rounded-xl p-px shadow-inner shadow-shadow"
                />
                <p className="absolute bottom-4 mx-auto w-full h-auto text-center text-xs font-semibold bg-second p-2">
                  {fileName}
                </p>
              </div>
              <Button onClick={saveUpload}>Save</Button>
              <Button onClick={cancelUpload}>Cancelar</Button>
            </div>
          )}
          {/* Barra de progresso */}
          <div className='flex flex-col w-1/2 '>
            <div className='flex items-center justify-end'>
              <Typography color="white" variant="h6">
                {demo} Mb left
              </Typography>
            </div>
              <Progress value={79} size='sm' color='purple' />
          </div>
        </div>
        {/* Gallery */}
        <div className="py-5 ">
          <hr className="h-px mb-5 bg-gray border-0" />
          {/* Search and Filter */}
          <div className="flex flex-row justify-between gap-x-5 ">
            <div className="w-1/2">
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
                className="bg-transparent w-full"
                icon={AiOutlineSearch}
              />
            </div>
            <div className="w-1/2 flex flex-col items-end gap-x-5 font-semibold">
              <div className="flex items-center gap-x-5">
                <span className="text-sm font-normal">Order by</span>
                <select
                  name="filter"
                  value={filter}
                  onChange={handleFilterChange}
                  className="bg-transparent px-4 py-2 text-lg uppercase"
                >
                  {filterOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-third">
                      {option.label}
                    </option>
                  ))}
                </select>
                <button
                  className={`text-3xl ml-2 rounded-lg ${!showCheckboxes ? '' : 'bg-main'}`}
                  onClick={toggleCheckboxes}
                >
                  <BiSlider className="rotate-180 m-1" />
                </button>
              </div>
              {showCheckboxes && (
                <div className="absolute mt-11 px-4 py-2 z-50 w-52 flex flex-col items-start text-start text-lg font-medium bg-second shadow-shadow shadow-lg rounded-lg">
                  <label className="flex items-center my-1">
                    <input
                      type="checkbox"
                      name="image"
                      checked={checkboxes.image}
                      onChange={handleCheckboxChange}
                      className="form-checkbox text-blue-500 bg-dark rounded-md mr-2"
                    />
                    Imagem
                  </label>
                  <label className="flex items-center my-1">
                    <input
                      type="checkbox"
                      name="pdf"
                      checked={checkboxes.pdf}
                      onChange={handleCheckboxChange}
                      className="form-checkbox text-blue-500 bg-dark rounded-md mr-2"
                    />
                    PDF
                  </label>
                  <label className="flex items-center my-1">
                    <input
                      type="checkbox"
                      name="doc"
                      checked={checkboxes.doc}
                      onChange={handleCheckboxChange}
                      className="form-checkbox rounded-md mr-2"
                    />
                    DOC
                  </label>
                </div>
              )}
            </div>
          </div>
          {/* Gallery */}
          <div className="flex flex-wrap w-full justify-center gap-y-5 py-5">
            {uploads.map((upload, index) => (
              <div
                key={index}
                className="flex relative w-52 h-56 border border-white rounded-lg mx-auto cursor-pointer"
                onClick={() => openModal(upload)}
              >
                <img src={upload.image} alt="Preview" className="w-full h-full absolute top-0 left-0 rounded-lg" />
                <div className="absolute bottom-4 w-full h-auto text-xs font-semibold">
                  <p className="w-36 p-2 mx-auto bg-second text-center">
                    {upload.fileName}
                  </p>
                  {/* <p className="w-36 p-2 mx-auto bg-second text-center">
                    {new Date(upload.date).toLocaleDateString()}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={closeModal} >
        {selectedUpload && (
          <div className=" flex flex-col">
            <h2 className="text-2xl mb-4">Edit Upload</h2>
            <div className="flex flex-row gap-x-5">
              <img src={selectedUpload.image} alt="Preview" className="w-96 h-96 mb-4" />
              <div className="flex flex-col gap-y-5">
                <div className="">
                  <label className="block text-sm font-medium mb-1">File Name</label>
                  <input
                    type="text"
                    name="fileName"
                    value={selectedUpload.fileName.replace(/\.[^/.]+$/, "")}
                    onChange={handleEditChange}
                    className="bg-transparent border border-white hover:border-white/70 px-4 py-3 pl-10 rounded-lg shadow h-12 leading-tight focus:outline-none focus:shadow-outline focus:border-main focus:bg-basic"
                  />
                </div>
                {/* <div className="">
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="text"
                    name="date"
                    value={new Date(selectedUpload.date).toLocaleDateString()}
                    readOnly
                    className="w-full p-2 bg-gray-700 rounded"
                  />
                </div> */}
                <span>
                  {selectedUpload.date}
                </span>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button onClick={saveEdit} className="bg-green-500">Save</Button>
              <Button onClick={deleteUpload} className="bg-red-500">Delete</Button>
              <Button onClick={closeModal} className="bg-gray-500">Cancel</Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default DecentralizedStorage;
