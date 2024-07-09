import React from 'react'
import CreateAccountModal from '../../Cash/CreateAccountModal'
import Ellipsis from '../../../assets/icons/Ellipsis'
import SearchBar from '../../sales/SearchBar'
import Table from '../../Cash/Table'
import Button from '../../../Components/Button'
import PlusCircle from '../../../assets/icons/PlusCircle'

type Props = {}

function ManualHome({}: Props) {
  return (
    <>
    <div className="p-5 bg-slate-50 h-[100vh]">
    <div className="flex items-center">
    <div>
    <h3 className="font-bold text-2xl text-textColor">Manual Journels</h3>
    <p className="text-sm text-gray mt-1">
      Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla egestas consectetur amet.
    </p>
  </div>
  <div className="ml-auto gap-3 flex items-center">
  <Button  variant="secondary" className="flex items-center justify-center" size="xl">
      <span className="flex items-center px-2.5"><PlusCircle /> &nbsp; New Journel</span>
    </Button>
    <div className="cursor-pointer">
      <Ellipsis />
    </div>
    </div>
    <div>
    </div>
    </div>

    <div className="mt-5 bg-white  p-5 rounded-xl">
    <div className="px-2 py-5">
        <SearchBar/>
    </div>
    <div>
        <Table/>
    </div>
    </div>
    </div>
    </>
  )
}

export default ManualHome