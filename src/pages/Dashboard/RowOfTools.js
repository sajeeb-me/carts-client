import React, { useState } from 'react';
import DeleteToolModal from './DeleteToolModal';

const RowOfTools = ({ tool, refetch, index }) => {
    const [deletingTool, setDeletingTool] = useState(null)
    return (
        <>
            <tr className='hover'>
                <th>{index + 1}</th>
                <td>{tool.name}</td>
                <td>{tool.price}</td>
                <td>{tool.available}</td>
                <td className='text-right'>
                    <label
                        htmlFor="delete-tool-modal"
                        onClick={() => setDeletingTool(tool)}
                        className="btn btn-error btn-sm">
                        Delete
                    </label>
                </td>
            </tr>
            {
                deletingTool && <DeleteToolModal
                    deletingTool={deletingTool}
                    setDeletingTool={setDeletingTool}
                    refetch={refetch}
                />
            }
        </>
    );
};

export default RowOfTools;