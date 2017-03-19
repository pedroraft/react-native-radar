#import <CoreLocation/CoreLocation.h>
#import <Foundation/Foundation.h>
#import <RadarSDK/RadarSDK.h>

@interface RNRadarUtils : NSObject

+ (NSString *)stringForPermissionsStatus:(CLAuthorizationStatus)status;
+ (NSString *)stringForStatus:(RadarStatus)status;
+ (NSDictionary *)dictionaryForUser:(RadarUser *)user;
+ (NSDictionary *)dictionaryForGeofence:(RadarGeofence *)geofence;
+ (NSArray *)arrayForEvents:(NSArray<RadarEvent *> *)events;
+ (NSDictionary *)dictionaryForEvent:(RadarEvent *)event;
+ (NSDictionary *)dictionaryForLocation:(CLLocation *)location;

@end
