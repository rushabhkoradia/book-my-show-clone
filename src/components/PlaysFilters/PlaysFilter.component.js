import { Disclosure } from '@headlessui/react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const PLaysFilter = (props) => {
  return (
    <>
        <Disclosure className="bg-white">
            {({ open }) => (
                <>
                    <Disclosure.Button className="py-2 flex items-center gap-3">
                        { open ? <BsChevronUp className="w-3 text-gray-700" /> : <BsChevronDown className="w-3 text-gray-700" /> }
                        <span className={ open ? "text-red-600" : "text-black" }>
                            { props.title }
                        </span>
                    </Disclosure.Button>
        
                    <Disclosure.Panel className="text-gray-500 my-3 pr-16">
                        <div className="flex flex-wrap item-center gap-2">
                            {
                                props.tags.map((tag) => (
                                    <>
                                        <div className="border border-gray-600 border-opacity-10 px-2 py-1">
                                            <span className="text-red-600"> { tag } </span>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    </>
  );
};
export default PLaysFilter;