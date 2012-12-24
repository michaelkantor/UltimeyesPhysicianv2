
package com.logs_ultimeyesvision_com_devdb;

import java.util.List;
import com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogDynamic;
import com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogStatic;
import com.logs_ultimeyesvision_com_devdb.data.output.GetCalibrationSessionAndExerciseNumbersForCustomerRtnType;
import com.logs_ultimeyesvision_com_devdb.data.output.GetDynamicSessionAndExerciseNumbersForCustomerRtnType;
import com.logs_ultimeyesvision_com_devdb.data.output.GetSessionIdsForCustomerRtnType;
import com.logs_ultimeyesvision_com_devdb.data.output.GetStaticSessionAndExerciseNumbersForCustomerRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "logs_ultimeyesvision_com_devDB"
 *  12/23/2012 14:46:29
 * 
 */
@SuppressWarnings("unchecked")
public class Logs_ultimeyesvision_com_devDB
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary> getSummariesForExerciseId(Integer exerciseId, Integer customerId, PagingOptions pagingOptions) {
        return ((List<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.getSummariesForExerciseIdQueryName), exerciseId, customerId, pagingOptions));
    }

    public List<GetCalibrationSessionAndExerciseNumbersForCustomerRtnType> getCalibrationSessionAndExerciseNumbersForCustomer(Integer customerId, List<Integer> sessionNumberList, PagingOptions pagingOptions) {
        return ((List<GetCalibrationSessionAndExerciseNumbersForCustomerRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.getCalibrationSessionAndExerciseNumbersForCustomerQueryName), customerId, sessionNumberList, pagingOptions));
    }

    public List<GetStaticSessionAndExerciseNumbersForCustomerRtnType> getStaticSessionAndExerciseNumbersForCustomer(Integer customerId, List<Integer> sessionNumberList, PagingOptions pagingOptions) {
        return ((List<GetStaticSessionAndExerciseNumbersForCustomerRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.getStaticSessionAndExerciseNumbersForCustomerQueryName), customerId, sessionNumberList, pagingOptions));
    }

    public List<UltimeyesLogStatic> getStaticLogs(Integer customerId, List<Integer> fileIdList, PagingOptions pagingOptions) {
        return ((List<UltimeyesLogStatic> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.getStaticLogsQueryName), customerId, fileIdList, pagingOptions));
    }

    public com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration getUltimeyesLogCalibrationById(Integer id, PagingOptions pagingOptions) {
        List<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> rtn = ((List<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.getUltimeyesLogCalibrationByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> getCalibrationLogs(Integer customerId, List<Integer> fileIdList, PagingOptions pagingOptions) {
        return ((List<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.getCalibrationLogsQueryName), customerId, fileIdList, pagingOptions));
    }

    public List<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary> getSummariesByLogFileId(List<Integer> logIdList, Integer customerId, PagingOptions pagingOptions) {
        return ((List<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.getSummariesByLogFileIdQueryName), logIdList, customerId, pagingOptions));
    }

    public List<GetDynamicSessionAndExerciseNumbersForCustomerRtnType> getDynamicSessionAndExerciseNumbersForCustomer(Integer customerId, List<Integer> sessionNumberList, PagingOptions pagingOptions) {
        return ((List<GetDynamicSessionAndExerciseNumbersForCustomerRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.getDynamicSessionAndExerciseNumbersForCustomerQueryName), customerId, sessionNumberList, pagingOptions));
    }

    public List<UltimeyesLogDynamic> getDynamicLogs(Integer customerId, List<Integer> fileIdList, PagingOptions pagingOptions) {
        return ((List<UltimeyesLogDynamic> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.getDynamicLogsQueryName), customerId, fileIdList, pagingOptions));
    }

    public List<GetSessionIdsForCustomerRtnType> getSessionIdsForCustomer(Integer customerId, PagingOptions pagingOptions) {
        return ((List<GetSessionIdsForCustomerRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.getSessionIdsForCustomerQueryName), customerId, pagingOptions));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
