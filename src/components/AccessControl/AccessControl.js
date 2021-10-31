import React, { useState } from 'react';
import SubHeader from './SubHeader/SubHeader';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';

import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableContainer,
  Checkbox,
  Collapse,
} from '@mui/material';
import {
  Access,
  Button,
  CollapsableContent,
  Content,
  Divider,
  InfoHeader,
  RoleContainer,
  RoleContent,
  RoleWrapper,
  SubTableContainer,
  Wrapper,
} from './styles';
import Radio from '@mui/material/Radio';
import { CustomSwitch } from '../shared';

const data = [
  {
    role: 'Management Team',
    accessLevel: 'All Access',
    members: 12,
    lastUpdate: '2 min ago',
  },
  {
    role: 'Procurement Team',
    accessLevel: 'Restricted Access',
    members: 8,
    lastUpdate: '12 min ago',
  },
  {
    role: 'Project Team',
    accessLevel: 'No Access',
    members: 22,
    lastUpdate: '58 min ago',
  },
];

const AccessControl = () => {
  const [role, setRole] = useState('none');
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <SubHeader />
      <Wrapper>
        <Content>
          {role === 'none' ? (
            <div className="edit-section">
              <Button>
                <AddIcon />
                <p>Add Role</p>
              </Button>
              <EditOutlinedIcon />
              <DeleteOutlinedIcon />
            </div>
          ) : (
            <InfoHeader>
              <ArrowBackIcon
                onClick={() => setRole('none')}
                style={{ marginTop: 2 }}
              />
              <p>{role}</p>
              <EditOutlinedIcon />
            </InfoHeader>
          )}
          {role !== 'none' && (
            <SubTableContainer>
              <RoleHeader />
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left"></TableCell>
                      <TableCell align="left">Department/Role</TableCell>
                      <TableCell align="center">Access Level</TableCell>
                      <TableCell align="center">Summary</TableCell>
                      <TableCell align="center">Last Update</TableCell>
                      <TableCell align="center"> &nbsp; </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ overflow: 'hidden' }}>
                    <TableRow>
                      <TableCell
                        align="center"
                        style={{ padding: 0, paddingLeft: 10 }}
                        onClick={() => setOpen(!open)}
                      >
                        {!open ? (
                          <AddCircleOutlineOutlinedIcon
                            sx={{ fill: 'gray', fontSize: 20, marginTop: 1 }}
                          />
                        ) : (
                          <DoDisturbOnOutlinedIcon
                            sx={{ fill: 'gray', fontSize: 20, marginTop: 1 }}
                          />
                        )}
                      </TableCell>
                      <TableCell align="right">
                        <div className="col-1">
                          <p>Budget</p>
                        </div>
                      </TableCell>
                      <TableCell align="center" sx={{ width: 160 }}>
                        <Access access="all">All Access</Access>
                      </TableCell>
                      <TableCell align="center">
                        View | Edit | Create | Delete
                      </TableCell>
                      <TableCell align="center">1 min ago</TableCell>
                      <TableCell align="center" sx={{ cursor: 'pointer' }}>
                        <CustomSwitch
                          checked={checked}
                          setChecked={setChecked}
                        />
                      </TableCell>
                    </TableRow>
                    {/* sx={{
                          
                        }} */}
                    <TableRow>
                      <TableCell padding={'none'} colSpan={12}>
                        <Collapse hidden={!open} in={open}>
                          <Table>
                            <TableBody>
                              <TableRow
                                sx={{
                                  padding: 0,
                                  '&:last-child td, &:last-child th': {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell
                                  align="center"
                                  style={{ padding: 0, paddingLeft: 10 }}
                                >
                                  <DoDisturbOnOutlinedIcon
                                    sx={{
                                      fill: 'gray',
                                      fontSize: 20,
                                      marginTop: 1,
                                    }}
                                  />
                                </TableCell>
                                <TableCell align="left">
                                  <div>
                                    <p>Bidding</p>
                                    <p>All aspects in the bidding module</p>
                                  </div>
                                </TableCell>
                                <TableCell
                                  align="center"
                                  sx={{ opacity: 0, padding: 0 }}
                                >
                                  <Access access="all">All Access</Access>
                                </TableCell>
                                <TableCell align="center" sx={{ opacity: 0 }}>
                                  View | Edit
                                </TableCell>

                                <TableCell align="center">
                                  <p>1 min ago</p>
                                </TableCell>
                                <TableCell align="center">
                                  <CustomSwitch
                                    checked={checked}
                                    setChecked={setChecked}
                                  />
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                          <CollapsableContent>
                            <div className="left">
                              <h4>Access Control</h4>
                              <div className="radio-container">
                                <Radio fontSize="small" />
                                <div className="radio-options">
                                  <p>All Access </p>
                                  <p>Can access all items</p>
                                </div>
                              </div>
                              <div className="radio-container">
                                <Radio fontSize="small" />
                                <div className="radio-options">
                                  <p>Restricted Access </p>
                                  <p>
                                    Can access only assigned or created items
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="right">
                              <h4>Permissions</h4>
                              <div className="select-container">
                                <Checkbox />
                                <p>View items in access</p>
                              </div>
                              <div className="select-container">
                                <Checkbox />
                                <p>Edit items in access</p>
                              </div>
                              <div className="select-container">
                                <Checkbox />
                                <p>Create items in access</p>
                              </div>
                              <div className="select-container">
                                <Checkbox />
                                <p>Delete items in access</p>
                              </div>
                            </div>
                          </CollapsableContent>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </SubTableContainer>
          )}
          {role === 'none' && (
            <TableContainer sx={{ width: '92%' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left">Department/Role</TableCell>
                    <TableCell align="center">Access Level</TableCell>
                    <TableCell align="center">No of Members</TableCell>
                    <TableCell align="center">Last Update</TableCell>
                    <TableCell align="center"> &nbsp; </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item) => {
                    return (
                      <TableRow>
                        <TableCell
                          align="center"
                          style={{ padding: 0, paddingLeft: 10 }}
                        >
                          <CircleOutlinedIcon />
                        </TableCell>
                        <TableCell align="right">
                          <div className="col-1">
                            <p>{item.role}</p>
                          </div>
                        </TableCell>
                        <TableCell align="center" sx={{ width: 170 }}>
                          {item.accessLevel === 'All Access' && (
                            <Access access="all">All Access</Access>
                          )}
                          {item.accessLevel === 'Restricted Access' && (
                            <Access access="restricted">
                              Restricted Access
                            </Access>
                          )}
                          {item.accessLevel === 'No Access' && (
                            <Access access="none">No Access</Access>
                          )}
                        </TableCell>
                        <TableCell align="center">{item.members}</TableCell>
                        <TableCell align="center">{item.lastUpdate}</TableCell>
                        <TableCell
                          onClick={() => setRole(item.role)}
                          align="center"
                          sx={{ cursor: 'pointer' }}
                        >
                          <VisibilityOutlinedIcon
                            sx={{ fill: 'gray', fontSize: 22 }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Content>
      </Wrapper>
    </>
  );
};

export const RoleHeader = () => {
  const [active, setActive] = useState('Access Control');
  return (
    <RoleWrapper>
      <RoleContainer>
        <RoleContent>
          <div
            className={`${active === 'Access Control' ? 'active' : ''}`}
            onClick={() => setActive('Access Control')}
          >
            <p>Access Control</p>
          </div>
          <Divider className="divider" />
          <div
            className={`${active === 'members' ? 'active' : ''}`}
            onClick={() => setActive('members')}
          >
            <p>Assigned Members</p>
          </div>
        </RoleContent>
      </RoleContainer>
    </RoleWrapper>
  );
};

export default AccessControl;
