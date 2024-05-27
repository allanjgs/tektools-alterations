import React, { useState, useCallback } from 'react';
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

const sortUploads = (uploads, filter) => {
  switch (filter) {
    case 'newest':
      return [...uploads].sort((a, b) => new Date(b.date) - new Date(a.date));
    case 'oldest':
      return [...uploads].sort((a, b) => new Date(a.date) - new Date(b.date));
    case 'larger':
      return [...uploads].sort((a, b) => (a.size || 0) - (b.size || 0));
    case 'minor':
      return [...uploads].sort((a, b) => (b.size || 0) - (a.size || 0));
    default:
      return uploads;
  }
};


const DecentralizedStorage = () => {
  const [state, setState] = useState({
    searchTerm: '',
    image: null,
    fileName: '',
    filter: filterOptions[0].value,
    showModal: false,
    selectedUpload: null,
    uploads: [],
    checkboxes: { image: true, pdf: true, doc: true },
    showCheckboxes: false,
  });
  
  const handleImageSelected = useCallback((imageData, name) => {
    setState(prev => ({ ...prev, image: imageData, fileName: name }));
  }, []);
  
  const saveUpload = useCallback(() => {
    const newUpload = {
      image: state.image,
      fileName: state.fileName,
      date: new Date().toISOString(),
    };
    setState(prev => ({
      ...prev,
      uploads: [...prev.uploads, newUpload],
      image: null,
      fileName: '',
    }));
    toast('Upload saved');
  }, [state.image, state.fileName]);
  
  const handleFilterChange = useCallback((event) => {
    const newFilter = event.target.value;
    setState(prev => ({
      ...prev,
      filter: newFilter,
      uploads: sortUploads(prev.uploads, newFilter),
    }));
    toast(`Filter changed to: ${newFilter}`);
  }, []);
  
  const toggleCheckboxes = () => {
    setState(prev => ({ ...prev, showCheckboxes: !prev.showCheckboxes }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setState(prev => ({
      ...prev,
      checkboxes: { ...prev.checkboxes, [name]: checked },
    }));
  };
  
  const openModal = (upload) => {
    setState(prev => ({ ...prev, showModal: true, selectedUpload: upload }));
  };
  
  const closeModal = () => {
    setState(prev => ({ ...prev, showModal: false, selectedUpload: null }));
  };
  
  const handleEditChange = (event) => {
    const { name, value } = event.target;
    const fileExtension = state.selectedUpload.fileName.split('.').pop();
    const updatedFileName = `${value}.${fileExtension}`;
    setState(prev => ({
      ...prev,
      selectedUpload: { ...prev.selectedUpload, [name]: updatedFileName },
    }));
  };
  
  const saveEdit = () => {
    setState(prev => ({
      ...prev,
      uploads: prev.uploads.map(upload => (upload === prev.selectedUpload ? prev.selectedUpload : upload)),
    }));
    toast('Upload updated');
    closeModal();
  };
  
  const deleteUpload = () => {
    setState(prev => ({
      ...prev,
      uploads: prev.uploads.filter(upload => upload !== prev.selectedUpload),
    }));
    toast('Upload deleted');
    closeModal();
  };
  
  const filteredUploads = state.uploads.filter(upload =>
    upload.fileName.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    
    console.log('size', filteredUploads )
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
        <div className="flex w-full gap-x-5">
          {!state.image && <div className='w-1/2'><ButtonUpload onImageSelected={handleImageSelected} /></div>}
          {state.image && (
            <div className="flex flex-row gap-x-5 justify-between">
              <div className="flex relative w-52 h-56 border border-white rounded-xl mx-auto">
                <img
                  src={state.image}
                  alt="Preview"
                  className="w-full h-full absolute top-0 left-0 rounded-xl p-px shadow-inner shadow-shadow"
                />
                <p className="absolute bottom-4 mx-auto w-full h-auto text-center text-xs font-semibold bg-second p-2">
                  {state.fileName}
                </p>
              </div>
              <Button onClick={saveUpload}>Save</Button>
              <Button onClick={() => setState(prev => ({ ...prev, image: null, fileName: '' }))}>Cancelar</Button>
            </div>
          )}
          {/* Barra de progresso */}
          <div className='flex flex-col w-1/2 '>
            <div className='flex items-center justify-end'>
              <Typography color="white" variant="h6">
                {10} Mb left
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
                value={state.searchTerm}
                onChange={(e) => setState(prev => ({ ...prev, searchTerm: e.target.value }))}
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
                  value={state.filter}
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
                  className={`text-3xl ml-2 rounded-lg ${!state.showCheckboxes ? '' : 'bg-main'}`}
                  onClick={toggleCheckboxes}
                >
                  <BiSlider className="rotate-180 m-1" />
                </button>
              </div>
              {state.showCheckboxes && (
                <div className="absolute mt-11 px-4 py-2 z-50 w-52 flex flex-col items-start text-start text-lg font-medium bg-second shadow-shadow shadow-lg rounded-lg">
                  <label className="flex items-center my-1">
                    <input
                      type="checkbox"
                      name="image"
                      checked={state.checkboxes.image}
                      onChange={handleCheckboxChange}
                      className="form-checkbox text-blue-500 bg-dark rounded-md mr-2"
                    />
                    Imagem
                  </label>
                  <label className="flex items-center my-1">
                    <input
                      type="checkbox"
                      name="pdf"
                      checked={state.checkboxes.pdf}
                      onChange={handleCheckboxChange}
                      className="form-checkbox text-blue-500 bg-dark rounded-md mr-2"
                    />
                    PDF
                  </label>
                  <label className="flex items-center my-1">
                    <input
                      type="checkbox"
                      name="doc"
                      checked={state.checkboxes.doc}
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
            {filteredUploads.map((upload, index) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={state.showModal} onClose={closeModal}>
        {state.selectedUpload && (
          <div className="flex flex-col">
            <h2 className="text-2xl mb-4">Edit Upload</h2>
            <div className="flex flex-row gap-x-5">
              <img src={state.selectedUpload.image} alt="Preview" className="w-96 h-96 mb-4" />
              <div className="flex flex-col gap-y-5">
                <div className="">
                  <label className="block text-sm font-medium mb-1">File Name</label>
                  <input
                    type="text"
                    name="fileName"
                    value={state.selectedUpload.fileName.replace(/\.[^/.]+$/, "")}
                    onChange={handleEditChange}
                    className="bg-transparent border border-white hover:border-white/70 px-4 py-3 pl-10 rounded-lg shadow h-12 leading-tight focus:outline-none focus:shadow-outline focus:border-main focus:bg-basic"
                  />
                </div>
                <span>{state.selectedUpload.date}</span>
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
