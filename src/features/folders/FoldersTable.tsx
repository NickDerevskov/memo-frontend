import { Link } from 'react-router-dom';
import Table from '../utils/Table';
import { FolderT } from '../../common/types';

function FoldersTable(props: any) { /* TODO add good type */
  let { folders, deleteAction }: { folders: FolderT[], deleteAction: (id: number) => void } = props;
  const fetchAction = () => { console.log('fetchAction'); };

  console.log('folders', folders);

  return (
    <div>
      <Table fetchAction={fetchAction}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Studied/Count</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              folders
                .map(({ id, title, created }: { id: number, title: string, created: string }) => (
                  <tr key={id}>
                    <td>
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={{ pathname: `/folder/${id}` }}
                        state={{ id, title, created }}
                      >
                        {title}
                      </Link>
                    </td>
                    <td>
                      ?
                      {' '}
                      {/* TODO - receive from backend studied and count */}
                    </td>
                    <td>
                      Edit
                    </td>
                    <td onClick={() => { deleteAction(id); }}>
                      X
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </Table>
    </div>
  );
}

export default FoldersTable;
