import {useState, useContext, useEffect} from 'react';
import { GlobalContext } from '../componants/partials/GlobalContext';
import { Slider } from 'antd';
import { Radio } from 'antd';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SearchImg from '../images/search.gif';
import * as React from 'react';
import { styled } from '@mui/system';
import {
  TablePagination,
  tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

export default function Properties(){
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    const { propertiesType, products, prices, formatNumber } = useContext(GlobalContext);
    const [propertyValue, setPropertyValue] = useState('tout');
    const [searchStatut, setSearchStatut] = useState('tout');
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setPropertyValue(e.target.value);
    };
    const onChangeStatut = (e) => {
        console.log('radio checked', e.target.value);
        setSearchStatut(e.target.value);
    };
    const [searchResult, setSearchResult] = useState(false);
    const [stepsCount, setStepsCount] = useState(1000);
    const [FilteredProperties, setFilteredProperties] = useState([...products]);
    const leng = prices.length-1;
    prices.sort(function(a, b){return a - b});;
    let minVal = parseInt(prices[0]);
    let maxVal = parseInt(prices[leng]);
    const tab = [...products];
    function searchProperty(budget){
        setFilteredProperties(tab.filter((property) =>{
            if(searchStatut === propertyValue){ return (property.price >= budget)}
            else{
                if(propertyValue !== 'tout' && searchStatut === 'tout'){ return (property.price >= budget && property.type === propertyValue)}
                else if(searchStatut !== 'tout' && propertyValue === 'tout'){ return (property.price >= budget && property.statut === searchStatut)}
                else{return(property.price >= budget && property.type === propertyValue && property.statut === searchStatut)}
            }
        }
        ))
    }
     // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - FilteredProperties.length) : 0;

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    };
    useEffect(()=>{
        searchProperty(minVal);
    },[])
    return(
       <main>
         <section className="properties">
            <div className="filter">
                <div className="part1">
                    <span>Propriétés</span>
                    <Radio.Group onChange={onChange} defaultValue={propertyValue}>
                        <Radio value='tout'>Tout</Radio>
                        {propertiesType.map((property, key)=>{
                            return(<Radio id={key} value={property.value}>{property.name}</Radio>)
                        })}
                    </Radio.Group>
                </div>
                <div className="part2">
                    <span>Statut</span>
                    <Radio.Group onChange={onChangeStatut} defaultValue={searchStatut}>
                        <Radio value='tout'>Tout</Radio>
                        <Radio value='vente'>Vente</Radio>
                        <Radio value='location'>Location</Radio>
                    </Radio.Group>
                </div>
                <div className="Budget">
                    <span>Buget</span>
                    <Slider min={minVal} max={maxVal} value={stepsCount}  onChange={setStepsCount} />
                    <div className='minmax'>
                        <span className='minVal'>{formatNumber(minVal)}</span>
                        <span className='maxVal'>{formatNumber(maxVal)}</span>
                    </div>
                    <div className='myBudget'>Mon budget : <strong> {formatNumber(stepsCount)} FcFA </strong></div>
                </div>
                <button className="searchBtn" onClick={()=>{
                    searchProperty(stepsCount)
                    setSearchResult(true);
                    }}>Rechercher</button>
            </div>
            <div className="list-properties">
                {searchResult && 
                FilteredProperties.length > 1 && <span className='searchResult'><strong>{FilteredProperties.length}</strong> resultats trouvés pour votre recherche</span>}
                {FilteredProperties.length === 1 && <span className='searchResult'><strong>{FilteredProperties.length}</strong> resultat trouvé pour votre recherche</span>}
                {FilteredProperties.length === 0 && 
                    <>
                        <span className='searchResult'>Aucun resultat trouvé pour votre recherche</span><br/>
                        <img src={SearchImg} alt='Pas de résultat'/>
                    </>
                }
                <div className='container'>
                    {(rowsPerPage > 0
                            ? FilteredProperties.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : FilteredProperties
                        ).map((property, key)=>{
                        return(
                            <a href={`/proprietes/details/${property.id}`} className='card' id={key}>
                                <span className='statut'>{property.statut}</span>
                                <img src={property.image} alt={property.name} />
                                <div className='infos'>
                                    <span className='prix'>{formatNumber(property.price)} FcFA</span>
                                    <span className='titre'>{property.name}</span>
                                    <span className='location'>{property.location}</span>
                                    <div className='caracteristiques'>
                                        <span><strong><MeetingRoomIcon/></strong> Chambres : {property.room}</span>
                                        <span><strong><SingleBedIcon/></strong> Lits : {property.bed}</span>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                     {emptyRows > 0 && (
                        <tr style={{ height: 34 * emptyRows }}>
                        <td colSpan={3} aria-hidden />
                        </tr>
                    )}
                </div>
                {FilteredProperties.length >= 1 && 
                <div className='pagination-row'>
                    <CustomTablePagination
                        rowsPerPageOptions={[4, 8, 10, { label: 'Tout', value: -1 }]}
                        colSpan={3}
                        count={FilteredProperties.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        slotProps={{
                            select: {
                            'aria-label': 'Nombre à afficher',
                            },
                            actions: {
                            showFirstButton: true,
                            showLastButton: true,
                            slots: {
                                firstPageIcon: FirstPageRoundedIcon,
                                lastPageIcon: LastPageRoundedIcon,
                                nextPageIcon: ChevronRightRoundedIcon,
                                backPageIcon: ChevronLeftRoundedIcon,
                            },
                            },
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                </div>
                }
            </div>
        </section>
       </main>
    )
}


const blue = {
    50: '#F0F7FF',
    200: '#A5D8FF',
    400: '#3399FF',
    900: '#003A75',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  
  const CustomTablePagination = styled(TablePagination)(
    ({ theme }) => `
    & .${classes.spacer} {
      display: none;
    }
  
    & .${classes.toolbar}  {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      padding: 4px 0;
  
      @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
      }
    }
  
    & .${classes.selectLabel} {
      margin: 0;
    }
  
    & .${classes.select}{
      font-family: 'IBM Plex Sans', sans-serif;
      padding: 2px 0 2px 4px;
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
      border-radius: 6px; 
      background-color: transparent;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      transition: all 100ms ease;
  
      &:hover {
        background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
        border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
      }
  
      &:focus {
        outline: 3px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
        border-color: ${blue[400]};
      }
    }
  
    & .${classes.displayedRows} {
      margin: 0;
  
      @media (min-width: 768px) {
        margin-left: auto;
      }
    }
  
    & .${classes.actions} {
      display: flex;
      gap: 6px;
      border: transparent;
      text-align: center;
    }
  
    & .${classes.actions} > button {
      display: flex;
      align-items: center;
      padding: 0;
      border: transparent;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      transition: all 120ms ease;
  
      > svg {
        font-size: 22px;
      }
  
      &:hover {
        background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
        border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
      }
  
      &:focus {
        outline: 3px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
        border-color: ${blue[400]};
      }
  
      &:disabled {
        opacity: 0.3;
        &:hover {
          border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
          background-color: transparent;
        }
      }
    }
    `,
  );