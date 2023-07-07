import { motion } from "framer-motion";
import Input from "./Input";
import DatePicker from "./DatePicker";
import SimpleBar from "simplebar-react";
import { Formik, FieldArray } from "formik";
import ItemList from "./ItemList";
import { initialFormValues, validationSchema } from "../utils/data";
import { Button, Modal } from "flowbite-react";
import { addInvoice } from "../firebase";

const CreateInvoice = ({ showModal, setOpenModal }) => {

  const saveInvoice = (invoice) => {
    console.log("saveInvoice ==>", `${JSON.stringify(invoice)}`);
    createInvoice({ ...invoice, status: "Pending" });
  };

  const createInvoice = (invoice) => {
    addInvoice(invoice).then(res => {
      console.log('addInvoice ==>', res);
      setOpenModal(false);
    });
  };

  return (
    <>
      <Modal show={showModal} size={"7xl"} onClose={() => setOpenModal(false)}>
        <Formik
          initialValues={initialFormValues}
          onSubmit={(values) => saveInvoice(values)}
          validationSchema={validationSchema}
        >
          {(props) => (
            <>
              <Modal.Header>Create Invoice</Modal.Header>
              <Modal.Body>
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 0.6,
                    }}
                    className='overlay'
                  ></motion.div>
                  <motion.div
                    className='formBody formHeight1'
                    initial={{ x: "-100vh" }}
                    animate={{ x: 0 }}
                  >
                    <div className='mobile3:max-w-container2 m-auto h-full'>
                      <SimpleBar style={{ maxHeight: "100%" }}>
                        <form className='h-full overflow-y-auto px-3 mb-5' action=''>
                          <div className='flex justify-between flex-row mb-5'>
                            <div className='flex items-center justify-center'>
                              <label
                                htmlFor='dropzone-file'
                                className='flex flex-col items-center justify-center h-60 w-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                              >
                                <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                                  <svg
                                    className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 20 16'
                                  >
                                    <path
                                      stroke='currentColor'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      strokeWidth='2'
                                      d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                                    />
                                  </svg>
                                  <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                                    <span className='font-semibold'>Upload Logo</span>
                                  </p>
                                  {/* <p className='text-xs text-gray-500 dark:text-gray-400'>
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p> */}
                                </div>
                                <input id='dropzone-file' type='file' className='hidden' />
                              </label>
                            </div>
                            <div className=''>
                              <h1 className='text-3xl'>Invoice</h1>

                              <Input
                                label={"Invoice #"}
                                handleChange={props.handleChange("invoiceNumber")}
                                name={"invoiceNumber"}
                                error={props.touched.invoiceNumber && props.errors.invoiceNumber}
                                value={props.values.invoiceNumber}
                              />

                              <div className='grid grid-cols-2 gap-6 mt-4'>
                                <DatePicker props={props} invoiceDate={new Date()} />
                                {/* <Terms props={props} /> */}
                              </div>
                            </div>
                          </div>

                          <div className='flex justify-between flex-row'>
                            <div className=''>
                              <p className='text-purple font-bold text-xs mb-3'>Bill From</p>
                              <Input
                                label={"Company Name"}
                                handleChange={props.handleChange("company.name")}
                                name={"company.name"}
                                error={props.touched.company && props.errors.company}
                                value={props.values.company.name}
                              />
                              <Input
                                label={"Street Adress"}
                                handleChange={props.handleChange("company.address")}
                                name={"address"}
                                error={props.touched.company && props.errors.company}
                                value={props.values.company.address}
                              />

                              <Input
                                label={"Company Email"}
                                handleChange={props.handleChange("company.email")}
                                name={"email"}
                                error={props.touched.company && props.errors.company}
                                value={props.values.company.email}
                              />

                              <div className='mobile3:grid grid-cols-3 gap-6'>
                                <div className='col-span-2 grid grid-cols-2 gap-6'>
                                  <Input
                                    label={"City"}
                                    handleChange={props.handleChange("company.city")}
                                    name={"city"}
                                    error={props.touched.from && props.errors.from}
                                    value={props.values.company.city}
                                  />
                                  {/* <Input
                                label={"Post Code"}
                                handleChange={props.handleChange("company.postCode")}
                                name={"postCode"}
                                error={props.touched.from && props.errors.from}
                                value={props.values.company.postCode}
                              /> */}
                                </div>
                                {/* <Input
                              label={"Country"}
                              handleChange={props.handleChange("company.country")}
                              name={"country"}
                              error={props.touched.from && props.errors.from}
                              value={props.values.company.country}
                            /> */}
                              </div>
                            </div>

                            <div>
                              <p className='text-purple font-bold text-xs mb-3'>Bill To</p>
                              <Input
                                label={"Customer Name"}
                                handleChange={props.handleChange("customer.name")}
                                name={"name"}
                                error={props.touched.customer && props.errors.customer}
                                value={props.values.customer.name}
                              />
                              <Input
                                label={"Customer Email"}
                                handleChange={props.handleChange("customer.email")}
                                name={"email"}
                                placeholder='e.g. email@example.com'
                                error={props.touched.customer && props.errors.customer}
                                value={props.values.customer.email}
                              />
                              <Input
                                label={"Street Adress"}
                                handleChange={props.handleChange("customer.address")}
                                name={"address"}
                                error={props.touched.customer && props.errors.customer}
                                value={props.values.customer.address}
                              />
                              <div className='mobile3:grid grid-cols-3 gap-6'>
                                <div className='col-span-2 grid grid-cols-2 gap-6'>
                                  <Input
                                    label={"City"}
                                    handleChange={props.handleChange("customer.city")}
                                    name={"city"}
                                    error={props.touched.customer && props.errors.customer}
                                    value={props.values.customer.city}
                                  />
                                  {/* <Input
                                  label={"Post Code"}
                                  handleChange={props.handleChange("customer.postCode")}
                                  name={"postCode"}
                                  error={props.touched.customer && props.errors.customer}
                                  value={props.values.customer.postCode}
                                /> */}
                                </div>
                                {/* <Input
                                label={"Country"}
                                handleChange={props.handleChange("customer.country")}
                                name={"country"}
                                error={props.touched.customer && props.errors.customer}
                                value={props.values.customer.country}
                              /> */}
                              </div>
                            </div>
                          </div>

                          <p className='text-gray5 text-lg1 font-bold mt-6'>Item List</p>
                          <FieldArray
                            name='items'
                            render={(arrayHelpers) => (
                              <ItemList props={props} arrayHelpers={arrayHelpers} />
                            )}
                          />
                          {props.touched.items && typeof props.errors.items === "string" && (
                            <p className='text-xxs font-semibold text-red mt-8'>
                              - {props.errors.items}
                            </p>
                          )}
                        </form>
                        <div className='text-xs flex justify-between items-center sticky bottom-0 pb-3.5 left-0 w-full bg-bg2 dark:bg-bg1-dark h-28 shadow-shadow1 px-3'>
                          {/* <button
                    className="font-bold text-purple bg-purple-light rounded-3xl py-4 mobile2:px-6 px-4 mobile1:text-xs text-xxs"
                    type="button"
                    onClick={() => setShowForm(false)}>
                    Discard
                  </button> */}
                          <div>
                            {/* <button
                      className="font-bold text-text2 dark:text-gray3 bg-bg3 rounded-3xl py-4 mobile2:px-6 px-4 mr-2 mobile1:text-xs text-xxs"
                      type="button"
                      onClick={() => draftInvoice(props.values)}>
                      Save as Draft
                    </button> */}
                            <Button
                              className='font-bold text-white dark:text-text1-dark bg-purple rounded-3xl py-4 mobile2:px-6 px-4 mobile1:text-xs text-xxs'
                              type='button'
                              onClick={(e) => props.handleSubmit(e)}
                            >
                              Save & Send
                            </Button>
                          </div>
                        </div>
                      </SimpleBar>
                    </div>
                  </motion.div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button type='submit'>Save</Button>
                <Button color='gray' onClick={() => setOpenModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default CreateInvoice;
